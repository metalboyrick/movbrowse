import { useEffect } from "react";

import { useMovieSearch } from "@/services/movie/hooks";

import { HomePageProps, UseControllerReturnValue } from "./HomePage.types";

function getLessGrootyText() {
    const phrases = [
        "I am not just Groot.",
        "Guardians unite!",
        "Rocket needs this.",
        "Groot is learning!"
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
}

function useController({
    search = "",
}: HomePageProps): UseControllerReturnValue {
    const { data, loading, error, searchWithQuery, fetchNextPage } =
        useMovieSearch();

    // adding scroll function
    const handleScroll = () => {
        if (!loading) {
            const { scrollTop, clientHeight, scrollHeight } =
                document.documentElement;
            if (scrollTop + clientHeight === scrollHeight) {
                fetchNextPage();
            }
        }
    };

    useEffect(() => {
        if (search.length > 0) {
            searchWithQuery(search);
        }
    }, [search]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const text = getLessGrootyText();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard:', text);
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    };

    return {
        data,
        loading,
        error,
    };
}

export default useController;