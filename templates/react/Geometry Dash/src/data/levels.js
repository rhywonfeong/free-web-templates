// Base coordinate is 540 because our target design canvas height is 600px 
// and the ground is 60px tall (600 - 60 = 540).
// GameEngine now automatically normalizes these to the player's actual screen height.
const groundY = 540;

const b = (x, y) => ({ type: 'block', x: x * 40, y: groundY - y * 40, width: 40, height: 40 });
const s = (x, y) => ({ type: 'spike', x: x * 40, y: groundY - y * 40 + 10, width: 30, height: 30 });
const saw = (x, y) => ({ type: 'sawblade', x: x * 40, y: groundY - y * 40 - 2, width: 44, height: 44 });
const pShip = (x, y) => ({ type: 'portal_ship', x: x * 40, y: groundY - y * 40 - 80, width: 70, height: 120 });
const pCube = (x, y) => ({ type: 'portal_cube', x: x * 40, y: groundY - y * 40 - 80, width: 70, height: 120 });

export const MAIN_LEVELS = [
  {
    id: 1,
    name: "Stereo Madness",
    difficulty: "Easy",
    stars: 1,
    color: "from-blue-500 to-cyan-400",
    audio: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/e4e45bfb-4be1-45df-8c5c-1f0b210f8a57/1b1ead82-ce7f-4ddd-9e7e-da85e45a06d6-hawfaywfgiauyfawf.wav?v=1775137907097",
    obstacles: [
      s(20, 1), s(21, 1),
      b(30, 1), b(31, 1), b(32, 1),
      b(40, 1), b(40, 2), s(42, 1),
      b(50, 1), b(51, 1), b(52, 1), s(53, 2), b(54, 1), b(55, 1),
      s(65, 1), s(66, 1), s(67, 1),
      b(80, 1), b(81, 2), b(82, 3), b(83, 4), b(84, 4), b(85, 4),
      s(95, 1),
      b(100, 1)
    ]
  },
  {
    id: 2,
    name: "Back on Track",
    difficulty: "Normal",
    stars: 2,
    color: "from-green-500 to-emerald-400",
    audio: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/e4e45bfb-4be1-45df-8c5c-1f0b210f8a57/5a4fca99-0074-42ba-b9da-c48a7f431c02-168734_Jumper-2.mp3?v=1775140092164",
    obstacles: [
      b(15, 1), s(16, 2), b(17, 1),
      s(25, 1), s(26, 1), b(35, 1), b(36, 1),
      pShip(45, 1),
      saw(60, 4), saw(70, 2), saw(80, 5), saw(90, 1),
      pCube(105, 1),
      s(115, 1), b(120, 1), b(121, 2), s(123, 1)
    ]
  },
  {
    id: 3,
    name: "Polargeist",
    difficulty: "Hard",
    stars: 3,
    color: "from-yellow-500 to-orange-500",
    audio: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/e4e45bfb-4be1-45df-8c5c-1f0b210f8a57/1b1ead82-ce7f-4ddd-9e7e-da85e45a06d6-hawfaywfgiauyfawf.wav?v=1775137907097",
    obstacles: [
      s(15, 1), s(16, 1), s(17, 1),
      b(25, 1), b(25, 2), b(25, 3), b(27, 4), s(29, 1),
      saw(35, 1), saw(38, 2),
      pShip(45, 1),
      saw(55, 5), saw(60, 1), saw(65, 4), saw(70, 2), saw(75, 5), saw(80, 1),
      pCube(90, 1),
      s(100, 1), s(101, 1), b(105, 1), b(106, 2), s(108, 1), s(109, 1), s(110, 1)
    ]
  }
];