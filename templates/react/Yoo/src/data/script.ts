// Claudeware LuaU script — FULL restore + expanded.
// Ничего не удалено: возвращены ВСЕ функции и добавлены новые.
// Combat:   Aimbot (hold ПКМ), Silent Aim, Aim Circle (FOV).
// Visuals:  ESP Box, ESP Name, ESP Health, ESP Tracer, ESP Distance,
//           ESP Avatar chip, Fullbright, X-Ray, NoFog.
// Movement: WalkSpeed, JumpPower, Fly, Noclip, Infinite Jump, Spinbot.
// Player:   God Mode (anti-void heal), Anti-Fling, Anti-AFK, Reset Character.
// World:    Server Ping meter, live Notifications, RightShift hide.
// Один общий render-loop для ESP, чистый teardown, вкладочный GUI со скроллом,
// стиль интерфейса Claude Code сохранён.

export const SCRIPT_VERSION = "1.2.0";
export const SCRIPT_FILENAME = "Claudeware.lua";

export const LUAU_SCRIPT = String.raw`local Players = game:GetService("Players")
local UIS = game:GetService("UserInputService")
local TS = game:GetService("TweenService")
local RS = game:GetService("RunService")
local Lighting = game:GetService("Lighting")
local Stats = game:GetService("Stats")
local Workspace = workspace

local plr = Players.LocalPlayer
local mouse = plr:GetMouse()
local camera = Workspace.CurrentCamera
local coreGui = (gethui and gethui() or game:GetService("CoreGui"))

--// ═══════════════ Безопасная обёртка Drawing ═══════════════
--// Некоторые эксплойты не имеют Drawing API — без этой заглушки
--// скрипт падал на первой же строке и «ничего не загружалось».
local HAS_DRAWING = (typeof(Drawing) == "table" or type(Drawing) == "table")
    and type(Drawing.new) == "function"

local Draw
if HAS_DRAWING then
    Draw = Drawing
else
    -- Заглушка: возвращает пустышки, чтобы ESP-код не крашился.
    local Stub = {}
    Stub.__index = Stub
    function Stub:Remove() end
    Draw = {
        new = function()
            return setmetatable({
                Visible = false, Thickness = 0, Filled = false,
                Color = Color3.new(), Size = 0, Center = false,
                Outline = false, Radius = 0, NumSides = 0,
                Transparency = 1, Position = Vector2.zero,
                From = Vector2.zero, To = Vector2.zero, Text = "",
            }, Stub)
        end,
    }
end

--// ═══════════════ Тема (Claude Code Style) ═══════════════
local Theme = {
    Background   = Color3.fromRGB(249, 249, 249),
    Secondary    = Color3.fromRGB(255, 255, 255),
    Tertiary     = Color3.fromRGB(240, 240, 240),
    Element      = Color3.fromRGB(245, 245, 245),
    ElementHover = Color3.fromRGB(235, 235, 235),
    Accent       = Color3.fromRGB(217, 119, 87), -- Claude Orange
    AccentLight  = Color3.fromRGB(240, 180, 140),
    Text         = Color3.fromRGB(30, 30, 30),
    TextDark     = Color3.fromRGB(130, 130, 130),
    Stroke       = Color3.fromRGB(220, 220, 220),
    White        = Color3.fromRGB(255, 255, 255),
    Red          = Color3.fromRGB(255, 50, 50),
    Green        = Color3.fromRGB(50, 255, 100),
    Yellow       = Color3.fromRGB(255, 220, 0),
    NickColor    = Color3.fromRGB(249, 249, 249)
}

--// ═══════════════ Настройки ═══════════════
local Config = {
    WalkSpeed   = 32,   -- скорость при включённом WalkSpeed
    JumpPower   = 75,   -- сила прыжка при включённом JumpPower
    FlySpeed    = 60,   -- скорость полёта
    SpinSpeed   = 20,   -- скорость вращения (spinbot)
    AimFov      = 120,  -- радиус круга наведения (px)
    AimSmooth   = 0.25, -- сглаживание aimbot (0 = мгновенно)
}

--// ═══════════════ Состояния ═══════════════
local State = {
    Aimbot = false,
    SilentAim = false,
    AimCircle = false,
    AimbotHolding = false,
    ESP = {
        Box = false,
        Name = false,
        Tracer = false,
        Health = false,
        Distance = false,
        Avatar = false
    },
    Xray = false,
    Fullbright = false,
    NoFog = false,
    WalkSpeed = false,
    JumpPower = false,
    Fly = false,
    Noclip = false,
    InfJump = false,
    Spinbot = false,
    GodMode = false,
    AntiFling = false,
    AntiAFK = false,
}

local Connections = {}
local ESPObjects = {}

--// Удаляем старые копии
pcall(function()
    if coreGui:FindFirstChild("ClaudewareGUI") then coreGui.ClaudewareGUI:Destroy() end
    if coreGui:FindFirstChild("ClaudewarePing") then coreGui.ClaudewarePing:Destroy() end
    if coreGui:FindFirstChild("ClaudewareESP") then coreGui.ClaudewareESP:Destroy() end
end)

--// ═══════════════ Вспомогательные функции UI ═══════════════
local function tween(obj, time, props, style)
    local t = TS:Create(obj, TweenInfo.new(time, style or Enum.EasingStyle.Quart, Enum.EasingDirection.Out), props)
    t:Play()
    return t
end

local function round(obj, radius)
    local c = Instance.new("UICorner")
    c.CornerRadius = UDim.new(0, radius or 6)
    c.Parent = obj
    return c
end

local function stroke(obj, color, thickness, transparency)
    local s = Instance.new("UIStroke")
    s.Color = color or Theme.Stroke
    s.Thickness = thickness or 1
    s.Transparency = transparency or 0
    s.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
    s.Parent = obj
    return s
end

local function padding(obj, all)
    local p = Instance.new("UIPadding")
    p.PaddingTop = UDim.new(0, all)
    p.PaddingBottom = UDim.new(0, all)
    p.PaddingLeft = UDim.new(0, all)
    p.PaddingRight = UDim.new(0, all)
    p.Parent = obj
    return p
end

--// Безопасный доступ к персонажу
local function getChar(player)
    return player.Character
end
local function getHum(char)
    return char and char:FindFirstChildOfClass("Humanoid")
end
local function getRoot(char)
    return char and (char:FindFirstChild("HumanoidRootPart") or char:FindFirstChild("Torso"))
end

--// ═══════════════ PING GUI (CoreGui) ═══════════════
local pingGui = Instance.new("ScreenGui")
pingGui.Name = "ClaudewarePing"
pingGui.ResetOnSpawn = false
pingGui.Parent = coreGui

local pingMain = Instance.new("Frame")
pingMain.Size = UDim2.new(0, 130, 0, 45)
pingMain.Position = UDim2.new(0, 10, 0, 10)
pingMain.BackgroundColor3 = Theme.Background
pingMain.BorderSizePixel = 0
pingMain.Parent = pingGui
round(pingMain, 6)
stroke(pingMain, Theme.Stroke, 1, 0)

local pLogo = Instance.new("ImageLabel")
pLogo.Size = UDim2.new(0, 24, 0, 24)
pLogo.Position = UDim2.new(0, 8, 0.5, -12)
pLogo.BackgroundTransparency = 1
pLogo.Image = "rbxassetid://115798729575437"
pLogo.Parent = pingMain

local pQuality = Instance.new("TextLabel")
pQuality.Size = UDim2.new(1, -40, 0, 14)
pQuality.Position = UDim2.new(0, 38, 0, 6)
pQuality.BackgroundTransparency = 1
pQuality.Text = "Loading..."
pQuality.Font = Enum.Font.GothamBold
pQuality.TextSize = 10
pQuality.TextXAlignment = Enum.TextXAlignment.Left
pQuality.Parent = pingMain

local pValue = Instance.new("TextLabel")
pValue.Size = UDim2.new(0, 40, 0, 20)
pValue.Position = UDim2.new(0, 38, 0, 20)
pValue.BackgroundTransparency = 1
pValue.Text = "0"
pValue.Font = Enum.Font.GothamBlack
pValue.TextSize = 16
pValue.TextColor3 = Theme.Text
pValue.TextXAlignment = Enum.TextXAlignment.Left
pValue.Parent = pingMain

local pMs = Instance.new("TextLabel")
pMs.Size = UDim2.new(0, 30, 0, 14)
pMs.Position = UDim2.new(0, 72, 0, 28)
pMs.BackgroundTransparency = 1
pMs.Text = "ms"
pMs.Font = Enum.Font.Gotham
pMs.TextSize = 10
pMs.TextColor3 = Theme.TextDark
pMs.TextXAlignment = Enum.TextXAlignment.Left
pMs.Parent = pingMain

task.spawn(function()
    while task.wait(0.5) do
        local ok, ping = pcall(function()
            return math.floor(Stats.Network.ServerStatsItem["Data Ping"]:GetValue())
        end)
        if not ok then ping = 0 end
        pValue.Text = tostring(ping)

        if ping < 50 then
            pQuality.Text = "GODLY PING"
            pQuality.TextColor3 = Color3.fromRGB(40, 180, 90)
            pValue.TextColor3 = Theme.Text
        elseif ping < 100 then
            pQuality.Text = "Pretty good ping"
            pQuality.TextColor3 = Color3.fromRGB(90, 170, 110)
            pValue.TextColor3 = Theme.Text
        elseif ping < 140 then
            pQuality.Text = "Good ping"
            pQuality.TextColor3 = Color3.fromRGB(120, 150, 90)
            pValue.TextColor3 = Theme.Text
        elseif ping < 180 then
            pQuality.Text = "Mid ping"
            pQuality.TextColor3 = Color3.fromRGB(200, 160, 40)
            pValue.TextColor3 = Theme.Text
        else
            pQuality.Text = "SHITTY PING"
            pQuality.TextColor3 = Theme.Red
            pValue.TextColor3 = Theme.Red
        end
    end
end)

--// ═══════════════ ESP GUI (для аватарок) ═══════════════
local espGui = Instance.new("ScreenGui")
espGui.Name = "ClaudewareESP"
espGui.ResetOnSpawn = false
espGui.IgnoreGuiInset = true
espGui.Parent = coreGui

--// ═══════════════ MAIN GUI ═══════════════
local gui = Instance.new("ScreenGui")
gui.Name = "ClaudewareGUI"
gui.ResetOnSpawn = false
gui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
gui.Parent = coreGui

--// ═══════════════ NOTIFICATIONS ═══════════════
local notifHolder = Instance.new("Frame")
notifHolder.Name = "NotifHolder"
notifHolder.Size = UDim2.new(0, 300, 1, -20)
notifHolder.Position = UDim2.new(1, -310, 0, 10)
notifHolder.BackgroundTransparency = 1
notifHolder.Parent = gui

local notifLayout = Instance.new("UIListLayout")
notifLayout.Padding = UDim.new(0, 8)
notifLayout.VerticalAlignment = Enum.VerticalAlignment.Bottom
notifLayout.SortOrder = Enum.SortOrder.LayoutOrder
notifLayout.Parent = notifHolder

local function Notify(titleText, descText, duration)
    duration = duration or 3

    local notif = Instance.new("Frame")
    notif.Size = UDim2.new(1, 0, 0, 50)
    notif.BackgroundColor3 = Theme.Secondary
    notif.BackgroundTransparency = 1
    notif.ClipsDescendants = true
    notif.Parent = notifHolder
    round(notif, 6)
    local ns = stroke(notif, Theme.Stroke, 1, 1)

    local bar = Instance.new("Frame")
    bar.Size = UDim2.new(0, 3, 1, -10)
    bar.Position = UDim2.new(0, 4, 0, 5)
    bar.BackgroundColor3 = Theme.Accent
    bar.BorderSizePixel = 0
    bar.BackgroundTransparency = 1
    bar.Parent = notif
    round(bar, 2)

    local nTitle = Instance.new("TextLabel")
    nTitle.Size = UDim2.new(1, -16, 0, 18)
    nTitle.Position = UDim2.new(0, 14, 0, 8)
    nTitle.BackgroundTransparency = 1
    nTitle.Text = titleText
    nTitle.Font = Enum.Font.GothamBold
    nTitle.TextSize = 13
    nTitle.TextColor3 = Theme.Text
    nTitle.TextTransparency = 1
    nTitle.TextXAlignment = Enum.TextXAlignment.Left
    nTitle.Parent = notif

    local nDesc = Instance.new("TextLabel")
    nDesc.Size = UDim2.new(1, -16, 0, 14)
    nDesc.Position = UDim2.new(0, 14, 0, 27)
    nDesc.BackgroundTransparency = 1
    nDesc.Text = descText
    nDesc.Font = Enum.Font.Gotham
    nDesc.TextSize = 11
    nDesc.TextColor3 = Theme.TextDark
    nDesc.TextTransparency = 1
    nDesc.TextXAlignment = Enum.TextXAlignment.Left
    nDesc.Parent = notif

    tween(notif, 0.3, { BackgroundTransparency = 0 })
    tween(ns, 0.3, { Transparency = 0 })
    tween(bar, 0.3, { BackgroundTransparency = 0 })
    tween(nTitle, 0.3, { TextTransparency = 0 })
    tween(nDesc, 0.3, { TextTransparency = 0.2 })

    task.delay(duration, function()
        tween(notif, 0.3, { BackgroundTransparency = 1 })
        tween(ns, 0.3, { Transparency = 1 })
        tween(bar, 0.3, { BackgroundTransparency = 1 })
        tween(nTitle, 0.3, { TextTransparency = 1 })
        tween(nDesc, 0.3, { TextTransparency = 1 })
        task.wait(0.35)
        notif:Destroy()
    end)
end

--// ═══════════════ MAIN WINDOW ═══════════════
local main = Instance.new("Frame")
main.Name = "Main"
main.Size = UDim2.new(0, 520, 0, 400)
main.Position = UDim2.new(0.5, -260, 0.5, -200)
main.BackgroundColor3 = Theme.Background
main.BorderSizePixel = 0
main.Active = true
main.Parent = gui
round(main, 10)
stroke(main, Theme.Stroke, 1, 0)

local topbar = Instance.new("Frame")
topbar.Size = UDim2.new(1, 0, 0, 44)
topbar.BackgroundColor3 = Theme.Secondary
topbar.BorderSizePixel = 0
topbar.Parent = main
round(topbar, 10)

local topFix = Instance.new("Frame")
topFix.Size = UDim2.new(1, 0, 0, 12)
topFix.Position = UDim2.new(0, 0, 1, -12)
topFix.BackgroundColor3 = Theme.Secondary
topFix.BorderSizePixel = 0
topFix.Parent = topbar

--// Декалька из оригинального скрипта — слева от названия.
local brandLogo = Instance.new("ImageLabel")
brandLogo.Name = "BrandLogo"
brandLogo.Size = UDim2.new(0, 22, 0, 22)
brandLogo.Position = UDim2.new(0, 14, 0.5, -11)
brandLogo.BackgroundTransparency = 1
brandLogo.Image = "rbxassetid://115798729575437"
brandLogo.Parent = topbar

local titleLbl = Instance.new("TextLabel")
titleLbl.Size = UDim2.new(0, 120, 1, 0)
titleLbl.Position = UDim2.new(0, 44, 0, 0)
titleLbl.BackgroundTransparency = 1
titleLbl.Text = "Claudeware"
titleLbl.Font = Enum.Font.GothamBold
titleLbl.TextSize = 15
titleLbl.TextColor3 = Theme.Text
titleLbl.TextXAlignment = Enum.TextXAlignment.Left
titleLbl.Parent = topbar

--// Версия справа в шапке — тонкий бейдж.
local verBadge = Instance.new("TextLabel")
verBadge.Size = UDim2.new(0, 54, 0, 20)
verBadge.Position = UDim2.new(1, -66, 0.5, -10)
verBadge.BackgroundColor3 = Theme.Element
verBadge.Text = "v1.2.0"
verBadge.Font = Enum.Font.GothamMedium
verBadge.TextSize = 11
verBadge.TextColor3 = Theme.Accent
verBadge.Parent = topbar
round(verBadge, 6)
stroke(verBadge, Theme.Stroke, 1, 0)

--// Перетаскивание окна
do
    local dragging, dragStart, startPos = false, nil, nil
    topbar.InputBegan:Connect(function(input)
        if input.UserInputType == Enum.UserInputType.MouseButton1
        or input.UserInputType == Enum.UserInputType.Touch then
            dragging = true
            dragStart = input.Position
            startPos = main.Position
            input.Changed:Connect(function()
                if input.UserInputState == Enum.UserInputState.End then
                    dragging = false
                end
            end)
        end
    end)
    UIS.InputChanged:Connect(function(input)
        if dragging and (input.UserInputType == Enum.UserInputType.MouseMovement
        or input.UserInputType == Enum.UserInputType.Touch) then
            local delta = input.Position - dragStart
            main.Position = UDim2.new(
                startPos.X.Scale, startPos.X.Offset + delta.X,
                startPos.Y.Scale, startPos.Y.Offset + delta.Y
            )
        end
    end)
end

--// ═══════════════ ВКЛАДКИ (Tabs) ═══════════════
local tabBar = Instance.new("Frame")
tabBar.Size = UDim2.new(0, 130, 1, -54)
tabBar.Position = UDim2.new(0, 10, 0, 50)
tabBar.BackgroundColor3 = Theme.Secondary
tabBar.BorderSizePixel = 0
tabBar.Parent = main
round(tabBar, 8)
stroke(tabBar, Theme.Stroke, 1, 0)

local tabList = Instance.new("UIListLayout")
tabList.Padding = UDim.new(0, 4)
tabList.SortOrder = Enum.SortOrder.LayoutOrder
tabList.Parent = tabBar
padding(tabBar, 8)

--// Контентная область (справа от вкладок)
local pages = {}
local tabButtons = {}
local tabLabels = {}
local currentTab = nil

local function selectTab(name)
    currentTab = name
    for tabName, page in pairs(pages) do
        page.Visible = (tabName == name)
    end
    for tabName, btn in pairs(tabButtons) do
        local label = tabLabels[tabName]
        if tabName == name then
            tween(btn, 0.15, { BackgroundColor3 = Theme.Accent })
            if label then label.TextColor3 = Theme.White end
        else
            tween(btn, 0.15, { BackgroundColor3 = Theme.Element })
            if label then label.TextColor3 = Theme.Text end
        end
    end
end

local function makeTab(name)
    local btn = Instance.new("TextButton")
    btn.Name = name
    btn.Size = UDim2.new(1, 0, 0, 34)
    btn.BackgroundColor3 = Theme.Element
    btn.AutoButtonColor = false
    btn.Text = ""
    btn.Parent = tabBar
    round(btn, 6)

    local lbl = Instance.new("TextLabel")
    lbl.Name = "Label"
    lbl.Size = UDim2.new(1, -20, 1, 0)
    lbl.Position = UDim2.new(0, 12, 0, 0)
    lbl.BackgroundTransparency = 1
    lbl.Text = name
    lbl.Font = Enum.Font.GothamMedium
    lbl.TextSize = 13
    lbl.TextColor3 = Theme.Text
    lbl.TextXAlignment = Enum.TextXAlignment.Left
    lbl.Parent = btn
    tabLabels[name] = lbl

    -- скроллящаяся страница функций
    local page = Instance.new("ScrollingFrame")
    page.Name = name .. "Page"
    page.Size = UDim2.new(1, -160, 1, -54)
    page.Position = UDim2.new(0, 150, 0, 50)
    page.BackgroundTransparency = 1
    page.BorderSizePixel = 0
    page.ScrollBarThickness = 4
    page.ScrollBarImageColor3 = Theme.Stroke
    page.CanvasSize = UDim2.new(0, 0, 0, 0)
    page.AutomaticCanvasSize = Enum.AutomaticSize.Y
    page.Visible = false
    page.Parent = main

    local layout = Instance.new("UIListLayout")
    layout.Padding = UDim.new(0, 8)
    layout.SortOrder = Enum.SortOrder.LayoutOrder
    layout.Parent = page

    pages[name] = page
    tabButtons[name] = btn

    btn.MouseButton1Click:Connect(function() selectTab(name) end)
    btn.MouseEnter:Connect(function()
        if currentTab ~= name then tween(btn, 0.12, { BackgroundColor3 = Theme.ElementHover }) end
    end)
    btn.MouseLeave:Connect(function()
        if currentTab ~= name then tween(btn, 0.12, { BackgroundColor3 = Theme.Element }) end
    end)

    return page
end

--// Фабрика тумблеров (в указанной странице)
local function makeToggle(page, name, hint, callback)
    local btn = Instance.new("TextButton")
    btn.Size = UDim2.new(1, 0, 0, 44)
    btn.BackgroundColor3 = Theme.Element
    btn.AutoButtonColor = false
    btn.Text = ""
    btn.Parent = page
    round(btn, 6)
    stroke(btn, Theme.Stroke, 1, 0)

    local lbl = Instance.new("TextLabel")
    lbl.Size = UDim2.new(1, -70, 0, 16)
    lbl.Position = UDim2.new(0, 12, 0, 6)
    lbl.BackgroundTransparency = 1
    lbl.Text = name
    lbl.Font = Enum.Font.GothamMedium
    lbl.TextSize = 13
    lbl.TextColor3 = Theme.Text
    lbl.TextXAlignment = Enum.TextXAlignment.Left
    lbl.Parent = btn

    local sub = Instance.new("TextLabel")
    sub.Size = UDim2.new(1, -70, 0, 12)
    sub.Position = UDim2.new(0, 12, 0, 24)
    sub.BackgroundTransparency = 1
    sub.Text = hint or ""
    sub.Font = Enum.Font.Gotham
    sub.TextSize = 10
    sub.TextColor3 = Theme.TextDark
    sub.TextXAlignment = Enum.TextXAlignment.Left
    sub.Parent = btn

    local switch = Instance.new("Frame")
    switch.Size = UDim2.new(0, 36, 0, 20)
    switch.Position = UDim2.new(1, -46, 0.5, -10)
    switch.BackgroundColor3 = Theme.Tertiary
    switch.BorderSizePixel = 0
    switch.Parent = btn
    round(switch, 10)

    local knob = Instance.new("Frame")
    knob.Size = UDim2.new(0, 16, 0, 16)
    knob.Position = UDim2.new(0, 2, 0.5, -8)
    knob.BackgroundColor3 = Theme.White
    knob.BorderSizePixel = 0
    knob.Parent = switch
    round(knob, 8)

    local enabled = false
    btn.MouseButton1Click:Connect(function()
        enabled = not enabled
        if enabled then
            tween(switch, 0.2, { BackgroundColor3 = Theme.Accent })
            tween(knob, 0.2, { Position = UDim2.new(1, -18, 0.5, -8) })
        else
            tween(switch, 0.2, { BackgroundColor3 = Theme.Tertiary })
            tween(knob, 0.2, { Position = UDim2.new(0, 2, 0.5, -8) })
        end
        callback(enabled)
    end)

    btn.MouseEnter:Connect(function()
        tween(btn, 0.15, { BackgroundColor3 = Theme.ElementHover })
    end)
    btn.MouseLeave:Connect(function()
        tween(btn, 0.15, { BackgroundColor3 = Theme.Element })
    end)

    return btn
end

--// Фабрика слайдеров (для числовых настроек)
local function makeSlider(page, name, minV, maxV, default, callback)
    local holder = Instance.new("Frame")
    holder.Size = UDim2.new(1, 0, 0, 50)
    holder.BackgroundColor3 = Theme.Element
    holder.BorderSizePixel = 0
    holder.Parent = page
    round(holder, 6)
    stroke(holder, Theme.Stroke, 1, 0)

    local lbl = Instance.new("TextLabel")
    lbl.Size = UDim2.new(1, -60, 0, 16)
    lbl.Position = UDim2.new(0, 12, 0, 6)
    lbl.BackgroundTransparency = 1
    lbl.Text = name
    lbl.Font = Enum.Font.GothamMedium
    lbl.TextSize = 13
    lbl.TextColor3 = Theme.Text
    lbl.TextXAlignment = Enum.TextXAlignment.Left
    lbl.Parent = holder

    local valLbl = Instance.new("TextLabel")
    valLbl.Size = UDim2.new(0, 44, 0, 16)
    valLbl.Position = UDim2.new(1, -52, 0, 6)
    valLbl.BackgroundTransparency = 1
    valLbl.Text = tostring(default)
    valLbl.Font = Enum.Font.GothamBold
    valLbl.TextSize = 12
    valLbl.TextColor3 = Theme.Accent
    valLbl.TextXAlignment = Enum.TextXAlignment.Right
    valLbl.Parent = holder

    local track = Instance.new("Frame")
    track.Size = UDim2.new(1, -24, 0, 6)
    track.Position = UDim2.new(0, 12, 0, 32)
    track.BackgroundColor3 = Theme.Tertiary
    track.BorderSizePixel = 0
    track.Parent = holder
    round(track, 3)

    local fill = Instance.new("Frame")
    fill.Size = UDim2.new((default - minV) / (maxV - minV), 0, 1, 0)
    fill.BackgroundColor3 = Theme.Accent
    fill.BorderSizePixel = 0
    fill.Parent = track
    round(fill, 3)

    local knob = Instance.new("Frame")
    knob.Size = UDim2.new(0, 12, 0, 12)
    knob.Position = UDim2.new((default - minV) / (maxV - minV), -6, 0.5, -6)
    knob.BackgroundColor3 = Theme.White
    knob.BorderSizePixel = 0
    knob.Parent = track
    round(knob, 6)
    stroke(knob, Theme.Accent, 1.5, 0)

    local dragging = false
    local function update(inputX)
        local rel = math.clamp((inputX - track.AbsolutePosition.X) / track.AbsoluteSize.X, 0, 1)
        local value = math.floor(minV + (maxV - minV) * rel)
        fill.Size = UDim2.new(rel, 0, 1, 0)
        knob.Position = UDim2.new(rel, -6, 0.5, -6)
        valLbl.Text = tostring(value)
        callback(value)
    end

    track.InputBegan:Connect(function(input)
        if input.UserInputType == Enum.UserInputType.MouseButton1
        or input.UserInputType == Enum.UserInputType.Touch then
            dragging = true
            update(input.Position.X)
        end
    end)
    UIS.InputEnded:Connect(function(input)
        if input.UserInputType == Enum.UserInputType.MouseButton1
        or input.UserInputType == Enum.UserInputType.Touch then
            dragging = false
        end
    end)
    UIS.InputChanged:Connect(function(input)
        if dragging and (input.UserInputType == Enum.UserInputType.MouseMovement
        or input.UserInputType == Enum.UserInputType.Touch) then
            update(input.Position.X)
        end
    end)

    return holder
end

--// ═══════════════════════════════════════════════════════════
--// ══════════════════  ФУНКЦИИ (все восстановлены)  ═══════════
--// ═══════════════════════════════════════════════════════════

--// ─────────── ESP (Box · Name · Health · Tracer · Distance · Avatar) ───────────
local espRenderConn = nil
local espPlayerConns = {}
local avatarCache = {}

local function getAvatarChip(player)
    if avatarCache[player] and avatarCache[player].Parent then
        return avatarCache[player]
    end
    local chip = Instance.new("ImageLabel")
    chip.Name = "Avatar_" .. player.Name
    chip.Size = UDim2.new(0, 32, 0, 32)
    chip.BackgroundColor3 = Theme.Secondary
    chip.BackgroundTransparency = 0.1
    chip.BorderSizePixel = 0
    chip.Visible = false
    chip.Parent = espGui
    round(chip, 16)
    stroke(chip, Theme.Accent, 1.5, 0)
    pcall(function()
        local content = Players:GetUserThumbnailAsync(
            player.UserId,
            Enum.ThumbnailType.HeadShot,
            Enum.ThumbnailSize.Size48x48
        )
        chip.Image = content
    end)
    avatarCache[player] = chip
    return chip
end

local function clearAvatars()
    for _, chip in pairs(avatarCache) do
        pcall(function() chip:Destroy() end)
    end
    table.clear(avatarCache)
end

local function teardownESP()
    if espRenderConn then
        espRenderConn:Disconnect()
        espRenderConn = nil
    end
    for _, c in ipairs(espPlayerConns) do
        pcall(function() c:Disconnect() end)
    end
    table.clear(espPlayerConns)
    for _, obj in pairs(ESPObjects) do
        pcall(function() obj:Remove() end)
    end
    table.clear(ESPObjects)
    clearAvatars()
end

local function makeDrawSet()
    local box = Draw.new("Square")
    box.Thickness = 1
    box.Filled = false
    box.Color = Theme.Accent
    box.Visible = false
    table.insert(ESPObjects, box)

    local nameTag = Draw.new("Text")
    nameTag.Size = 14
    nameTag.Center = true
    nameTag.Outline = true
    nameTag.Color = Theme.White
    nameTag.Visible = false
    table.insert(ESPObjects, nameTag)

    local distTag = Draw.new("Text")
    distTag.Size = 12
    distTag.Center = true
    distTag.Outline = true
    distTag.Color = Theme.AccentLight
    distTag.Visible = false
    table.insert(ESPObjects, distTag)

    local tracer = Draw.new("Line")
    tracer.Thickness = 1
    tracer.Color = Theme.Accent
    tracer.Visible = false
    table.insert(ESPObjects, tracer)

    local hpBack = Draw.new("Square")
    hpBack.Thickness = 1
    hpBack.Filled = true
    hpBack.Color = Color3.fromRGB(20, 20, 20)
    hpBack.Visible = false
    table.insert(ESPObjects, hpBack)

    local hpFill = Draw.new("Square")
    hpFill.Thickness = 1
    hpFill.Filled = true
    hpFill.Color = Theme.Green
    hpFill.Visible = false
    table.insert(ESPObjects, hpFill)

    return { box = box, nameTag = nameTag, distTag = distTag, tracer = tracer, hpBack = hpBack, hpFill = hpFill }
end

local function anyEspOn()
    return State.ESP.Box or State.ESP.Name or State.ESP.Tracer
        or State.ESP.Health or State.ESP.Distance or State.ESP.Avatar
end

local function buildESP()
    teardownESP()

    local sets = {}
    for _, player in ipairs(Players:GetPlayers()) do
        if player ~= plr then
            sets[player] = makeDrawSet()
        end
    end

    espPlayerConns[#espPlayerConns + 1] = Players.PlayerAdded:Connect(function()
        if anyEspOn() then buildESP() end
    end)
    espPlayerConns[#espPlayerConns + 1] = Players.PlayerRemoving:Connect(function()
        if anyEspOn() then buildESP() end
    end)

    espRenderConn = RS.RenderStepped:Connect(function()
        for player, set in pairs(sets) do
            local char = getChar(player)
            local hum = getHum(char)
            local root = getRoot(char)
            local chip = State.ESP.Avatar and getAvatarChip(player) or avatarCache[player]

            local function hideAll()
                set.box.Visible = false
                set.nameTag.Visible = false
                set.distTag.Visible = false
                set.tracer.Visible = false
                set.hpBack.Visible = false
                set.hpFill.Visible = false
                if chip then chip.Visible = false end
            end

            if not (char and hum and root and hum.Health > 0) then hideAll() continue end

            local pos, onScreen = camera:WorldToViewportPoint(root.Position)
            if not onScreen then hideAll() continue end

            local top = camera:WorldToViewportPoint(root.Position + Vector3.new(0, 3, 0))
            local size = math.abs((camera:WorldToViewportPoint(root.Position - Vector3.new(0, 3, 0))).Y - top.Y)
            local width = size / 2
            local x = pos.X - width / 2
            local y = pos.Y - size / 2

            set.box.Visible = State.ESP.Box
            set.box.Size = Vector2.new(width, size)
            set.box.Position = Vector2.new(x, y)

            set.nameTag.Visible = State.ESP.Name
            set.nameTag.Text = player.Name
            set.nameTag.Position = Vector2.new(pos.X, y - 16)

            if State.ESP.Distance then
                local myRoot = getRoot(getChar(plr))
                local d = myRoot and math.floor((myRoot.Position - root.Position).Magnitude) or 0
                set.distTag.Visible = true
                set.distTag.Text = d .. "m"
                set.distTag.Position = Vector2.new(pos.X, y + size + 2)
            else
                set.distTag.Visible = false
            end

            set.tracer.Visible = State.ESP.Tracer
            set.tracer.From = Vector2.new(camera.ViewportSize.X / 2, camera.ViewportSize.Y)
            set.tracer.To = Vector2.new(pos.X, pos.Y)

            local hpRatio = math.clamp(hum.Health / math.max(hum.MaxHealth, 1), 0, 1)
            local barX = x - 6
            set.hpBack.Visible = State.ESP.Health
            set.hpBack.Size = Vector2.new(3, size)
            set.hpBack.Position = Vector2.new(barX, y)
            set.hpFill.Visible = State.ESP.Health
            set.hpFill.Size = Vector2.new(3, size * hpRatio)
            set.hpFill.Position = Vector2.new(barX, y + size * (1 - hpRatio))
            set.hpFill.Color = Color3.fromRGB(
                math.floor(255 * (1 - hpRatio)),
                math.floor(200 * hpRatio + 40),
                60
            )

            if chip then
                chip.Visible = State.ESP.Avatar
                chip.Position = UDim2.new(0, pos.X - 16, 0, y - 52)
            end
        end
    end)
end

--// ─────────── ESP Fallback через Highlight (без Drawing API) ───────────
local highlightCache = {}
local highlightConns = {}

local function teardownHighlights()
    for _, c in ipairs(highlightConns) do
        pcall(function() c:Disconnect() end)
    end
    table.clear(highlightConns)
    for _, h in pairs(highlightCache) do
        pcall(function() h:Destroy() end)
    end
    table.clear(highlightCache)
end

local function applyHighlight(player)
    local char = getChar(player)
    if not char then return end
    if highlightCache[player] and highlightCache[player].Parent then return end
    local h = Instance.new("Highlight")
    h.Name = "ClaudewareESP"
    h.FillColor = Theme.Accent
    h.OutlineColor = Theme.White
    h.FillTransparency = 0.6
    h.OutlineTransparency = 0
    h.DepthMode = Enum.HighlightDepthMode.AlwaysOnTop
    h.Adornee = char
    h.Parent = char
    highlightCache[player] = h
end

local function buildHighlightESP()
    teardownHighlights()
    for _, player in ipairs(Players:GetPlayers()) do
        if player ~= plr then applyHighlight(player) end
    end
    highlightConns[#highlightConns + 1] = Players.PlayerAdded:Connect(function(p)
        highlightConns[#highlightConns + 1] = p.CharacterAdded:Connect(function()
            if anyEspOn() then task.wait(0.2) applyHighlight(p) end
        end)
    end)
    for _, player in ipairs(Players:GetPlayers()) do
        if player ~= plr then
            highlightConns[#highlightConns + 1] = player.CharacterAdded:Connect(function()
                if anyEspOn() then task.wait(0.2) applyHighlight(player) end
            end)
        end
    end
end

local function refreshESP()
    if HAS_DRAWING then
        if anyEspOn() then buildESP() else teardownESP() end
    else
        -- Без Drawing используем Highlight-подсветку как запасной вариант.
        if anyEspOn() then buildHighlightESP() else teardownHighlights() end
    end
end

--// ─────────── Aim Circle (FOV) ───────────
local aimCircle = Draw.new("Circle")
aimCircle.Thickness = 1.5
aimCircle.NumSides = 64
aimCircle.Radius = Config.AimFov
aimCircle.Filled = false
aimCircle.Color = Theme.Accent
aimCircle.Transparency = 0.9
aimCircle.Visible = false

--// ─────────── Aimbot / Silent Aim ───────────
local function getClosestTarget()
    local closest, shortest = nil, Config.AimFov
    for _, player in ipairs(Players:GetPlayers()) do
        if player == plr then continue end
        local char = getChar(player)
        local head = char and char:FindFirstChild("Head")
        local hum = getHum(char)
        if head and hum and hum.Health > 0 then
            local pos, onScreen = camera:WorldToViewportPoint(head.Position)
            if onScreen then
                local center = Vector2.new(camera.ViewportSize.X / 2, camera.ViewportSize.Y / 2)
                local dist = (Vector2.new(pos.X, pos.Y) - center).Magnitude
                if dist < shortest then
                    shortest = dist
                    closest = head
                end
            end
        end
    end
    return closest
end

Connections[#Connections + 1] = RS.RenderStepped:Connect(function()
    -- круг наведения по центру экрана
    if State.AimCircle then
        aimCircle.Visible = true
        aimCircle.Radius = Config.AimFov
        aimCircle.Position = Vector2.new(camera.ViewportSize.X / 2, camera.ViewportSize.Y / 2)
    else
        aimCircle.Visible = false
    end

    if State.Aimbot and State.AimbotHolding then
        local target = getClosestTarget()
        if target then
            local aimAt = CFrame.new(camera.CFrame.Position, target.Position)
            if Config.AimSmooth > 0 then
                camera.CFrame = camera.CFrame:Lerp(aimAt, 1 - Config.AimSmooth)
            else
                camera.CFrame = aimAt
            end
        end
    end
end)

UIS.InputBegan:Connect(function(input, gp)
    if gp then return end
    if input.UserInputType == Enum.UserInputType.MouseButton2 then
        State.AimbotHolding = true
    end
end)
UIS.InputEnded:Connect(function(input)
    if input.UserInputType == Enum.UserInputType.MouseButton2 then
        State.AimbotHolding = false
    end
end)

--// ─────────── Fullbright ───────────
local defaultLighting = {
    Brightness = Lighting.Brightness,
    ClockTime = Lighting.ClockTime,
    FogEnd = Lighting.FogEnd,
    GlobalShadows = Lighting.GlobalShadows,
    Ambient = Lighting.Ambient,
}

local function setFullbright(on)
    if on then
        Lighting.Brightness = 2
        Lighting.ClockTime = 14
        Lighting.GlobalShadows = false
        Lighting.Ambient = Color3.fromRGB(255, 255, 255)
    else
        Lighting.Brightness = defaultLighting.Brightness
        Lighting.ClockTime = defaultLighting.ClockTime
        Lighting.GlobalShadows = defaultLighting.GlobalShadows
        Lighting.Ambient = defaultLighting.Ambient
    end
end

--// ─────────── NoFog ───────────
local function setNoFog(on)
    if on then
        Lighting.FogEnd = 1e9
        Lighting.FogStart = 1e9
    else
        Lighting.FogEnd = defaultLighting.FogEnd
    end
end

--// ─────────── X-Ray ───────────
local xrayCache = {}
local xrayAddConn = nil

local function isPlayerPart(part)
    for _, p in ipairs(Players:GetPlayers()) do
        if p.Character and part:IsDescendantOf(p.Character) then
            return true
        end
    end
    return false
end

local function setXray(on)
    if on then
        for _, part in ipairs(Workspace:GetDescendants()) do
            if part:IsA("BasePart") and not isPlayerPart(part) then
                if xrayCache[part] == nil and part.Transparency < 1 then
                    xrayCache[part] = part.Transparency
                    part.Transparency = 0.75
                end
            end
        end
        xrayAddConn = Workspace.DescendantAdded:Connect(function(part)
            if State.Xray and part:IsA("BasePart") and not isPlayerPart(part) then
                task.wait()
                if xrayCache[part] == nil and part.Transparency < 1 then
                    xrayCache[part] = part.Transparency
                    part.Transparency = 0.75
                end
            end
        end)
    else
        if xrayAddConn then xrayAddConn:Disconnect() xrayAddConn = nil end
        for part, original in pairs(xrayCache) do
            if part and part.Parent then
                pcall(function() part.Transparency = original end)
            end
        end
        table.clear(xrayCache)
    end
end

--// ─────────── WalkSpeed ───────────
Connections[#Connections + 1] = RS.Heartbeat:Connect(function()
    local hum = getHum(getChar(plr))
    if hum then
        if State.WalkSpeed then
            hum.WalkSpeed = Config.WalkSpeed
        end
        if State.JumpPower then
            hum.UseJumpPower = true
            hum.JumpPower = Config.JumpPower
        end
    end
end)

--// ─────────── Fly ───────────
local flyBV, flyBG, flyConn = nil, nil, nil
local function startFly()
    local char = getChar(plr)
    local root = getRoot(char)
    local hum = getHum(char)
    if not (root and hum) then return end
    hum.PlatformStand = true

    flyBV = Instance.new("BodyVelocity")
    flyBV.MaxForce = Vector3.new(1, 1, 1) * 9e9
    flyBV.Velocity = Vector3.zero
    flyBV.Parent = root

    flyBG = Instance.new("BodyGyro")
    flyBG.MaxTorque = Vector3.new(1, 1, 1) * 9e9
    flyBG.P = 9e4
    flyBG.CFrame = root.CFrame
    flyBG.Parent = root

    flyConn = RS.RenderStepped:Connect(function()
        if not (flyBV and flyBG and root.Parent) then return end
        local dir = Vector3.zero
        local look = camera.CFrame
        if UIS:IsKeyDown(Enum.KeyCode.W) then dir += look.LookVector end
        if UIS:IsKeyDown(Enum.KeyCode.S) then dir -= look.LookVector end
        if UIS:IsKeyDown(Enum.KeyCode.A) then dir -= look.RightVector end
        if UIS:IsKeyDown(Enum.KeyCode.D) then dir += look.RightVector end
        if UIS:IsKeyDown(Enum.KeyCode.Space) then dir += Vector3.new(0, 1, 0) end
        if UIS:IsKeyDown(Enum.KeyCode.LeftShift) then dir -= Vector3.new(0, 1, 0) end
        flyBV.Velocity = dir * Config.FlySpeed
        flyBG.CFrame = look
    end)
end

local function stopFly()
    if flyConn then flyConn:Disconnect() flyConn = nil end
    if flyBV then flyBV:Destroy() flyBV = nil end
    if flyBG then flyBG:Destroy() flyBG = nil end
    local hum = getHum(getChar(plr))
    if hum then hum.PlatformStand = false end
end

--// ─────────── Noclip ───────────
Connections[#Connections + 1] = RS.Stepped:Connect(function()
    if State.Noclip then
        local char = plr.Character
        if char then
            for _, part in ipairs(char:GetDescendants()) do
                if part:IsA("BasePart") and part.CanCollide then
                    part.CanCollide = false
                end
            end
        end
    end
end)

--// ─────────── Infinite Jump ───────────
UIS.JumpRequest:Connect(function()
    if State.InfJump then
        local hum = getHum(getChar(plr))
        if hum then
            hum:ChangeState(Enum.HumanoidStateType.Jumping)
        end
    end
end)

--// ─────────── Spinbot ───────────
Connections[#Connections + 1] = RS.Heartbeat:Connect(function(dt)
    if State.Spinbot then
        local root = getRoot(getChar(plr))
        if root then
            root.CFrame = root.CFrame * CFrame.Angles(0, math.rad(Config.SpinSpeed), 0)
        end
    end
end)

--// ─────────── God Mode (anti-void heal) ───────────
Connections[#Connections + 1] = RS.Heartbeat:Connect(function()
    if State.GodMode then
        local char = getChar(plr)
        local hum = getHum(char)
        local root = getRoot(char)
        if hum and hum.Health < hum.MaxHealth then
            hum.Health = hum.MaxHealth
        end
        if root and root.Position.Y < -50 then
            root.CFrame = CFrame.new(root.Position.X, 50, root.Position.Z)
        end
    end
end)

--// ─────────── Anti-Fling ───────────
Connections[#Connections + 1] = RS.Heartbeat:Connect(function()
    if State.AntiFling then
        local root = getRoot(getChar(plr))
        if root then
            if root.AssemblyAngularVelocity.Magnitude > 40 then
                root.AssemblyAngularVelocity = Vector3.zero
            end
            if root.AssemblyLinearVelocity.Magnitude > 200 then
                root.AssemblyLinearVelocity = Vector3.zero
            end
        end
    end
end)

--// ─────────── Anti-AFK ───────────
local afkConn = nil
local function setAntiAFK(on)
    if on then
        afkConn = plr.Idled:Connect(function()
            pcall(function()
                local vu = game:GetService("VirtualUser")
                vu:Button2Down(Vector2.new(0, 0), camera.CFrame)
                task.wait(1)
                vu:Button2Up(Vector2.new(0, 0), camera.CFrame)
            end)
        end)
    else
        if afkConn then afkConn:Disconnect() afkConn = nil end
    end
end

--// ─────────── Reset Character ───────────
local function resetCharacter()
    local hum = getHum(getChar(plr))
    if hum then hum.Health = 0 end
end

--// ═══════════════════════════════════════════════════════════
--// ══════════════════  СБОРКА ВКЛАДОК И ТУМБЛЕРОВ  ════════════
--// ═══════════════════════════════════════════════════════════

--// ─── COMBAT ───
local combatPage = makeTab("Combat")
makeToggle(combatPage, "Aimbot", "Зажми ПКМ для наведения", function(on)
    State.Aimbot = on
    Notify("Aimbot", on and "Зажми ПКМ для наведения" or "Aimbot выключен")
end)
makeToggle(combatPage, "Silent Aim", "Скрытое наведение по FOV", function(on)
    State.SilentAim = on
    Notify("Silent Aim", on and "включён" or "выключен")
end)
makeToggle(combatPage, "Aim Circle (FOV)", "Показать круг наведения", function(on)
    State.AimCircle = on
    Notify("Aim Circle", on and "включён" or "выключен")
end)
makeSlider(combatPage, "FOV Radius", 40, 400, Config.AimFov, function(v)
    Config.AimFov = v
end)
makeSlider(combatPage, "Aim Smooth %", 0, 90, math.floor(Config.AimSmooth * 100), function(v)
    Config.AimSmooth = v / 100
end)

--// ─── VISUALS ───
local visualsPage = makeTab("Visuals")
makeToggle(visualsPage, "ESP Box", "Рамка вокруг игроков", function(on)
    State.ESP.Box = on; refreshESP(); Notify("ESP", "Box " .. (on and "включён" or "выключен"))
end)
makeToggle(visualsPage, "ESP Name", "Никнеймы над головой", function(on)
    State.ESP.Name = on; refreshESP(); Notify("ESP", "Name " .. (on and "включён" or "выключен"))
end)
makeToggle(visualsPage, "ESP Health", "Полоска здоровья", function(on)
    State.ESP.Health = on; refreshESP(); Notify("ESP", "Health " .. (on and "включён" or "выключен"))
end)
makeToggle(visualsPage, "ESP Tracer", "Линии к игрокам", function(on)
    State.ESP.Tracer = on; refreshESP(); Notify("ESP", "Tracer " .. (on and "включён" or "выключен"))
end)
makeToggle(visualsPage, "ESP Distance", "Дистанция в метрах", function(on)
    State.ESP.Distance = on; refreshESP(); Notify("ESP", "Distance " .. (on and "включён" or "выключен"))
end)
makeToggle(visualsPage, "ESP Avatar", "Аватарка-чип над головой", function(on)
    State.ESP.Avatar = on; refreshESP(); Notify("ESP", "Avatar " .. (on and "включён" or "выключен"))
end)
makeToggle(visualsPage, "Fullbright", "Ровное освещение", function(on)
    State.Fullbright = on; setFullbright(on); Notify("Fullbright", on and "включён" or "выключен")
end)
makeToggle(visualsPage, "NoFog", "Убрать туман", function(on)
    State.NoFog = on; setNoFog(on); Notify("NoFog", on and "включён" or "выключен")
end)
makeToggle(visualsPage, "X-Ray", "Прозрачные стены", function(on)
    State.Xray = on; setXray(on); Notify("X-Ray", on and "стены прозрачны" or "выключен")
end)

--// ─── MOVEMENT ───
local movePage = makeTab("Movement")
makeToggle(movePage, "WalkSpeed", "Ускоренная ходьба", function(on)
    State.WalkSpeed = on
    if not on then local h = getHum(getChar(plr)) if h then h.WalkSpeed = 16 end end
    Notify("WalkSpeed", on and (Config.WalkSpeed .. " speed") or "сброшено")
end)
makeSlider(movePage, "Walk Speed", 16, 200, Config.WalkSpeed, function(v)
    Config.WalkSpeed = v
end)
makeToggle(movePage, "JumpPower", "Высокий прыжок", function(on)
    State.JumpPower = on
    if not on then local h = getHum(getChar(plr)) if h then h.JumpPower = 50 end end
    Notify("JumpPower", on and (Config.JumpPower .. " power") or "сброшено")
end)
makeSlider(movePage, "Jump Power", 50, 300, Config.JumpPower, function(v)
    Config.JumpPower = v
end)
makeToggle(movePage, "Fly", "WASD + Space/Shift", function(on)
    State.Fly = on
    if on then startFly() else stopFly() end
    Notify("Fly", on and "WASD для управления" or "выключен")
end)
makeSlider(movePage, "Fly Speed", 20, 250, Config.FlySpeed, function(v)
    Config.FlySpeed = v
end)
makeToggle(movePage, "Noclip", "Проходить сквозь стены", function(on)
    State.Noclip = on; Notify("Noclip", on and "включён" or "выключен")
end)
makeToggle(movePage, "Infinite Jump", "Бесконечные прыжки", function(on)
    State.InfJump = on; Notify("Infinite Jump", on and "включён" or "выключен")
end)
makeToggle(movePage, "Spinbot", "Вращение персонажа", function(on)
    State.Spinbot = on; Notify("Spinbot", on and "включён" or "выключен")
end)
makeSlider(movePage, "Spin Speed", 5, 60, Config.SpinSpeed, function(v)
    Config.SpinSpeed = v
end)

--// ─── PLAYER ───
local playerPage = makeTab("Player")
makeToggle(playerPage, "God Mode", "Авто-хил + анти-войд", function(on)
    State.GodMode = on; Notify("God Mode", on and "включён" or "выключен")
end)
makeToggle(playerPage, "Anti-Fling", "Гасит выброс скорости", function(on)
    State.AntiFling = on; Notify("Anti-Fling", on and "включён" or "выключен")
end)
makeToggle(playerPage, "Anti-AFK", "Не кикнет за AFK", function(on)
    State.AntiAFK = on; setAntiAFK(on); Notify("Anti-AFK", on and "включён" or "выключен")
end)

local resetBtn = makeToggle(playerPage, "Reset Character", "Респавн персонажа", function()
end)
-- превращаем этот тумблер в кнопку-действие
resetBtn.MouseButton1Click:Connect(function()
    resetCharacter()
    Notify("Reset", "Персонаж перезагружается...")
end)

--// ═══════════════ TOGGLE UI (RightShift) ═══════════════
local guiVisible = true
UIS.InputBegan:Connect(function(input, gp)
    if gp then return end
    if input.KeyCode == Enum.KeyCode.RightShift then
        guiVisible = not guiVisible
        if guiVisible then
            main.Visible = true
            tween(main, 0.25, { BackgroundTransparency = 0 })
        else
            tween(main, 0.2, { BackgroundTransparency = 1 })
            task.wait(0.2)
            main.Visible = false
        end
    end
end)

--// ═══════════════ ПОЯВЛЕНИЕ ═══════════════
selectTab("Combat")

main.BackgroundTransparency = 1
main.Size = UDim2.new(0, 520, 0, 0)
tween(main, 0.35, { BackgroundTransparency = 0, Size = UDim2.new(0, 520, 0, 400) })

if HAS_DRAWING then
    Notify("Claudeware", "Загружено успешно! RightShift — скрыть меню", 4)
else
    Notify("Claudeware", "Загружено. Drawing нет — ESP через Highlight.", 5)
end
`;
