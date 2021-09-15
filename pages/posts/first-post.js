import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from '../../components/layout';
import Hoge from '../../components/hoge';
import Chakura from '../../components/chakura';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <Image
                src="/images/profile.jpg" // Route of the image file
                height={200} // Desired size with correct aspect ratio
                width={200} // Desired size with correct aspect ratio
                alt="Your Name"
            />
                    <Hoge card_name="あああああ" card_description="どｆじょ；ｓぢｆじゃｐｓｄ；おふぃじゃ；ｓどふぃじゃ；ｓどふぃじゃ；しお"/>
        <Layout>aaaaa</Layout>
<Chakura></Chakura>
        </>

    );
}
