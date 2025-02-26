import './App.css'
import Container from './components/Container'
import Header from './components/Header'



function App() {
  return (
    <>
      <Header />
      <Container 
        title="FreeCodeCamp" 
        img={{ src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s", alt: "FreeCodeCamp" }}
        link="https://www.freecodecamp.org/"
      />
      <Container 
        title="CodePath" 
        img={{ src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKz0RJAlSpCFNC46E1fjkmK6IyFkEKvT0aOlS1k_fWKZ-iVlVOpkFwVeGZ34AiwHrHMow&usqp=CAU", alt: "CodePath" }}
        link="https://www.codepath.org/"
      />
      <Container 
        title="Roadmap.Sh" 
        img={{ src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS5EOtDelDx5tDdpjNevnFzXpnPCpFtvHxR0EcJ5Xaqrk4C2p9y8-FkLFGCiKb1b5aHo&usqp=CAU", alt: "roadmap.sh" }}
        link="https://roadmap.sh/"
      />
      <Container 
        title="Khan Academy" 
        img={{ src: "https://yt3.googleusercontent.com/ytc/AIdro_l3GggKOWViCBpDs9APIsK6MHB2Mu-ECo5dUEU-Vay2gg=s900-c-k-c0x00ffffff-no-rj", alt: "Khan Academy" }}
        link="https://www.khanacademy.org/"
      />
      <Container 
        title="Edx" 
        img={{ src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5p4xcNXJ1vy8KnU4PN-NYxPjJTBac8pgxKw&s", alt: "Edx" }}
        link="https://www.edx.org/"
      />
      <Container 
        title="W3Schools" 
        img={{ src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_fjRVJLHlGB9w7R5zuvuciwZ9zwgGN6-oQ&s", alt: "W3Schools" }}
        link="https://www.w3schools.com/"
      />
      <Container 
        title="HackerRank" 
        img={{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png", alt: "HackerRank" }}
        link="https://www.hackerrank.com/"
      />
      <Container 
        title="Kaggle" 
        img={{ src: "https://miro.medium.com/v2/resize:fit:960/1*RhY-QI4-51bjyPKPQ2rkDQ.jpeg", alt: "Kaggle" }}
        link="https://www.kaggle.com/"
      />
      <Container 
        title="GeeksforGeeks" 
        img={{ src: "https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64", alt: "GeeksforGeeks" }}
        link="https://www.geeksforgeeks.org/"
      />
      <Container 
        title="The Cherno" 
        img={{ src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YuNtQ_tapZBqYm0e4rVqPvfmKJ1AHnK_1w&s", alt: "The Cherno" }}
        link="https://www.youtube.com/@TheCherno"
      />
    </>
  )
}

export default App
