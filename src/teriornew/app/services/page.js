import React from "react"
import Layout from "../layout/Layout"
import { Text, Container, Box } from "@chakra-ui/react"
import PostCard from "../components/PostCard"
import postData from "../data"
import '../globals.css'

export default function Services() {

  return (
    <Layout>
      <Container maxW="8xl" mt={'100px'}>
        <Text 
        textDecoration={'uppercase'}
        fontSize={'40px'}
        fontWeight={900}
        mb={'40px'}
        >SERVICES</Text>
        {postData.map((post) => (
          <PostCard 
            key={post.id}
            imageSrc={post.imageSrc}
            title={post.title}
            description={post.description}
            category={post.category}
          />
        ))}
        <Box h={'200px'}></Box>
      </Container>
    </Layout>
  )
}