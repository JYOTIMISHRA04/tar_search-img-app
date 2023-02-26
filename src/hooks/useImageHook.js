import { useEffect, useState } from "react";

const useImageHook = (query) => {

    const [data, setData] = useState({})
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=9`

    async function fetchResults() {
        setLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID ZHWquFXpJFvoD-PZRg6IunXWXyEE7n_Yzf3NlSQ6d9k");

        // eslint-disable-next-line no-unused-vars
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: myHeaders,
        }).then((res) => res.json())
            .then((result) => {
                setData(result)
                setLoading(false)
            });
    }

    useEffect(() => {
        const getData = setTimeout(() => {
            (async () => {
                await fetchResults()
            })()

        }, 500)

        return () => clearTimeout(getData)

    }, [query, page])

    return { data, page, setPage, loading }
}

export default useImageHook