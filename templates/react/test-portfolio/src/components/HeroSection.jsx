import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroSection() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const container = canvasRef.current
    if (!container) return

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0xffffff, 0.002)

    let width = container.clientWidth
    let height = container.clientHeight

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0xffffff, 1)
    container.appendChild(renderer.domElement)

    const geometry = new THREE.TorusKnotGeometry(9, 2.5, 120, 16)

    const material = new THREE.MeshPhysicalMaterial({
      color: 0x888888,
      emissive: 0x000000,
      metalness: 0.5,
      roughness: 0.1,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    })

    const torusKnot = new THREE.Mesh(geometry, material)
    scene.add(torusKnot)

    const sparkCount = 100
    const sparkGeo = new THREE.CircleGeometry(0.15, 3)
    const sparkMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      side: THREE.DoubleSide,
      blending: THREE.NormalBlending,
      transparent: true,
      opacity: 1,
      depthTest: false
    })

    const sparks = new THREE.InstancedMesh(sparkGeo, sparkMat, sparkCount)
    torusKnot.add(sparks)

    const dummy = new THREE.Object3D()
    const sparkData = []
    const radialSegments = 16
    const tubularSegments = 120

    for (let i = 0; i < sparkCount; i += 1) {
      sparkData.push({
        speed: 0.001 + Math.random() * 0.002,
        progress: Math.random(),
        pathIndex: Math.floor(Math.random() * radialSegments)
      })
    }

    const posAttribute = geometry.attributes.position
    const stride = radialSegments + 1
    const v1 = new THREE.Vector3()
    const v2 = new THREE.Vector3()

    function updateSparks() {
      sparkData.forEach((spark, i) => {
        spark.progress += spark.speed
        if (spark.progress >= 1) spark.progress = 0

        const exactInd = spark.progress * tubularSegments
        const u = Math.floor(exactInd)
        const nextU = (u + 1) % tubularSegments
        const v = spark.pathIndex

        const idx1 = (u * stride + v) * 3
        const idx2 = (nextU * stride + v) * 3

        v1.fromArray(posAttribute.array, idx1)
        v2.fromArray(posAttribute.array, idx2)
        v1.lerp(v2, exactInd - u)

        dummy.position.copy(v1)
        dummy.lookAt(v2)
        dummy.updateMatrix()
        sparks.setMatrixAt(i, dummy.matrix)
      })

      sparks.instanceMatrix.needsUpdate = true
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const pLight1 = new THREE.PointLight(0xd4af37, 1, 50)
    pLight1.position.set(10, 10, 10)
    scene.add(pLight1)

    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e) => {
      const windowHalfX = window.innerWidth / 2
      const windowHalfY = window.innerHeight / 2
      mouseX = (e.clientX - windowHalfX) * 0.0005
      mouseY = (e.clientY - windowHalfY) * 0.0005
    }

    document.addEventListener('mousemove', handleMouseMove)

    let animationId

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      targetX = mouseX * 0.5
      targetY = mouseY * 0.5

      torusKnot.rotation.y += 0.05 * (targetX - torusKnot.rotation.y) + 0.002
      torusKnot.rotation.x += 0.05 * (targetY - torusKnot.rotation.x) + 0.001

      updateSparks()
      renderer.render(scene, camera)
    }

    animate()

    const onResize = () => {
      width = container.clientWidth
      height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('mousemove', handleMouseMove)

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }

      geometry.dispose()
      material.dispose()
      sparkGeo.dispose()
      sparkMat.dispose()
      renderer.dispose()
    }
  }, [])

  const scrollToMain = () => {
    const section = document.getElementById('main-content')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="hero-header selection-reset">
      <div id="canvas-container" ref={canvasRef} />

      <div className="hero-top pointer-auto container-wide reveal-up">
        <div className="brand">ux.jonny</div>
        <nav className="top-nav">
          <a href="#main-content">sobre</a>
          <a href="#work">projetos</a>
          <a href="https://www.linkedin.com/in/jonathan-fernandes-a8208410a/" target="_blank" rel="noreferrer">
            Linkedin
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5521972139499&text=Preciso+de+ajuda+com+a+plataforma+Gamble+Sports&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            contato
          </a>
        </nav>
      </div>

      <div className="hero-bottom pointer-auto container-wide reveal-up reveal-delay-1">
        <div className="hero-left">
          <p>
            Senior Product Designer na Allos. Construo Design Systems e experiências de produto
            escaláveis, aplicando IA para criar, acelerar consistência, documentação e entrega.
          </p>
          <button type="button" onClick={scrollToMain} className="explore-btn">
            Explorar <span className="arrow">↓</span>
          </button>
        </div>

        <div className="hero-title-wrap">
          <h1 className="hero-title">
            <span>Product Designer</span>
            <span>&amp; Design System</span>
          </h1>
          <p className="hero-subtitle">since 2018</p>
        </div>
      </div>
    </header>
  )
}