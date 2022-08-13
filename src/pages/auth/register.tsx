import RegisterPageContainer from '@client/containers/RegisterPage'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export default function registerPage({
  
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <RegisterPageContainer />
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      
    }
  }
} 