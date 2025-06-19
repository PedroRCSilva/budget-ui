import { HomeView } from './view'
import { useLogin } from './hooks/useLogin'

export const Home = () => {
  const { signIn } = useLogin()
  return <HomeView login={signIn} />
}
