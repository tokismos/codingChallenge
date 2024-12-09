import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/configurator",
      permanent: true,
    },
  }
}

const Index = () => {
  return null
}

export default Index
