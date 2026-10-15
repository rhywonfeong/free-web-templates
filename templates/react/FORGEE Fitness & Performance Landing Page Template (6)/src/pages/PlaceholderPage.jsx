import { useEffect } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export default function PlaceholderPage({ title }) {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [title])

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center relative z-10 pt-32">
      <iconify-icon icon="solar:settings-bold-duotone" class="text-[#E30000] text-6xl mb-8 opacity-50"></iconify-icon>
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
        {title}
      </h1>
      <p className="text-[#C4C4C4] text-lg max-w-xl mb-10">
        Esta seção está atualmente em desenvolvimento interno. O sistema completo será lançado em breve com acesso total aos membros.
      </p>
      <Button onClick={() => navigate('/')} variant="secondary">
        Voltar para Home
      </Button>
    </div>
  )
}