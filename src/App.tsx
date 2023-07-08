import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Body from '@components/Body';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar/Navbar';
import Loader from '@components/Spinner';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Oculta el loader después de 1 segundo
    }, 1000); // 1000 milisegundos = 1 segundo

    return () => clearTimeout(timer); // Cancela el temporizador cuando el componente se desmonte
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box textAlign="center" fontSize="xl" height="100vh">
          <Navbar />
          <Body />
          <Footer />
        </Box>
      )}
    </>
  );
};
