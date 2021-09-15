import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Profile</title>
                <meta
                    name="description"
                    content="テキストテキストテキストテキストテキストテキストテキストテキスト"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <header id="header" className="wrapper">
                <h1 className="site-title">
                    <a href="/">
                       Profile
                    </a>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#bicycle">Bicycle</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <div id="mainvisual">
                    <img
                        src="/images/mainvisual.jpg"
                        alt="テキストテキストテキスト"
                    />
                </div>

                <section id="about" className="wrapper">
                    <h2 className="section-title">About</h2>
                    <div className="content">
                        <img
                            src="/images/about.jpg"
                            alt="テキストテキストテキスト"
                        />
                        <div className="text">
                            <h3 className="content-title">KAKERU MIYAICHI</h3>
                            <p>
                                テキストテキストテキストテキストテキストテキストテキスト
                                <br />
                                テキストテキストテキストテキストテキストテキストテキスト
                                <br />
                                テキストテキストテキストテキストテキストテキストテキスト
                            </p>
                        </div>
                    </div>
                </section>
                <section id="bicycle" className="wrapper">
                    <h2 className="section-title">Bicycle</h2>
                    <ul>
                        <li>
                            <Image
                                src={"/images/bicycle1.jpg"}
                                alt="テキストテキストテキスト"
                                width={360}
                                height={240}
                                layout={"responsive"}
                            />
                            <h3 className="content-title">タイトルタイトル</h3>
                            <p>テキストテキストテキスト</p>
                        </li>
                        <li>
                            <Image
                                src="/images/bicycle2.jpg"
                                alt="テキストテキストテキスト"
                                width={360}
                                height={240}
                                layout={"responsive"}
                            />
                            <h3 className="content-title">タイトルタイトル</h3>
                            <p>テキストテキストテキスト</p>
                        </li>
                        <li>
                            <Image
                                src="/images/bicycle3.jpg"
                                alt="テキストテキストテキスト"
                                width={360}
                                height={240}
                                layout={"responsive"}
                            />
                            <h3 className="content-title">タイトルタイトル</h3>
                            <p>テキストテキストテキスト</p>
                        </li>
                    </ul>
                </section>
            </main>

            <footer id="footer">
                <p>&copy; 2020 Profile</p>
            </footer>
        </>
    );
}
