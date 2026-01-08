import { useState, useEffect } from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import axios from "axios";
import "./home.css";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [busca, setBusca] = useState("");
    const [mensagem, setMensagem] = useState("");

    const [imagensOriginais, setImagensOriginais] = useState([]);
    const [imagensFiltradas, setImagensFiltradas] = useState([]);

    const UNSPLASH_ACCESS_KEY = "OLaPMZ3gdWOqwTAgYL84Obtk3DymbGJfZqkXs90Aiyk";

    useEffect(() => {
        // função para carregar imagens iniciais da API Unsplash
        const carregarImagens = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "https://api.unsplash.com/photos",
                    {
                        headers: {
                            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
                        },
                        params: {
                            per_page: 10,
                            page: 1,
                        },
                    }
                );

                const imagensFormatadas = response.data.map((imagem) => ({
                    id: imagem.id,
                    endereco: imagem.urls.regular,
                    titulo:
                        imagem.alt_description ||
                        imagem.description ||
                        "Foto sem título",
                    alt: imagem.alt_description || "Imagem do Unsplash",
                }));

                setImagensOriginais(imagensFormatadas);
                setImagensFiltradas(imagensFormatadas);
            } catch (error) {
                console.error("Erro na API Unsplash:", error);
                setImagensFiltradas([]);
            } finally {
                setLoading(false);
            }
        };

        carregarImagens();
    }, []);

    // Função para buscar imagens na API Unsplash
    const handleBusca = async (termo) => {
        setBusca(termo);

        if (termo === "") {
            setImagensFiltradas(imagensOriginais);
            return;
        }

        setLoading(true);

        try {
            const response = await axios.get(
                "https://api.unsplash.com/search/photos",
                {
                    params: {
                        query: termo,
                        per_page: 10,
                        client_id: UNSPLASH_ACCESS_KEY,
                    },
                }
            );

            const imagensBusca = response.data.results.map((imagem) => ({
                id: imagem.id,
                endereco: imagem.urls.regular,
                titulo:
                    imagem.alt_description ||
                    imagem.description ||
                    "Sem título",
                alt: imagem.alt_description || "Imagem Unsplash",
            }));

            setMensagem(
                `Encontrei ${imagensBusca.length} imagens de "${termo}"`
            );

            if (imagensBusca.length === 0) {
                setLoading(true)
                setMensagem(
                    `Nenhuma imagem encontrada para "${termo}". Fique com as sugestões iniciais.`
                );
                setTimeout(() => {
                    setImagensFiltradas(imagensOriginais);
                    setMensagem("");
                }, 4000);
            }

            setImagensFiltradas(imagensBusca);
        } catch (error) {
            console.error("Erro ao buscar na API:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <SearchBar
                value={busca}
                onChange={setBusca}
                onClick={handleBusca}
            />
            <p className="mensagem">{mensagem}</p>
            <main className="galeria">
                {loading
                    ? Array.from({ length: 10 }, (_, i) => <Loader key={i} />)
                    : imagensFiltradas.map((imagem) => (
                          <Card
                              key={imagem.id}
                              endereco={imagem.endereco}
                              alt={imagem.alt}
                              titulo={imagem.titulo}
                          />
                      ))}
            </main>
            <Footer />
        </>
    );
};

export default Home;
