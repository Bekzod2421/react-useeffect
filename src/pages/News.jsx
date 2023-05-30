import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"

const News = () => {
	const [news, setNews] = useState([]);
	const getNews = async function () {
		const response = await fetch("https://inshorts.deta.dev/news?category=technology");
		if (response.ok) {
			const data = await response.json()
			return data;
		}
		else {
			throw new Error('Xatolik')
		}
	}
	useEffect(() => {
		getNews().then(data => {
			setNews(data.data)
			console.log(data)
		}).catch(error => console.log(error.message));
	}, []);
	return (
		<>
			<Header />
			<h1>News Page</h1>
			<ul>
				{news && news.map((item, index) => (
					<li key={index}>
						<h1>{item.title}</h1>
						<p>{item.content}</p>
						<b>Author: {item.author}</b>
					</li>
				))}

			</ul>
			<Footer />
		</>
	)
}

export default News