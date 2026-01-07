import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";

import "./home.css";

const Home = () => {
    return (
        <>
            <Header />
            <SearchBar />
            <main className="galeria">
                <Card
                    endereco="https://picsum.photos/id/1015/600/400"
                    alt="Imagem 1"
                    titulo="Paisagem 1"
                />
                <Card
                    endereco="https://picsum.photos/id/1016/600/400"
                    alt="Imagem 2"
                    titulo="Paisagem 2"
                />
                <Card
                    endereco="https://picsum.photos/id/1018/600/400"
                    alt="Imagem 3"
                    titulo="Paisagem 3"
                />
            </main>
        </>
    );
};

export default Home;
