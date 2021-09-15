// 神社一覧を取得して表示するコンポネント
import { useQuery } from 'react-query';
import './Shrines.css';

const fetchShrines = async () => {
  const res = await fetch('https://www.kamimusubi.or.jp/api/shrines', {mode: 'cors'});
  return res.json();
};

function Shrines(props) {
  const {data, isLoading, isError, error} = useQuery('shrines', fetchShrines);
  //console.log(data)

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <h2>神社一覧</h2>
      <ul>
        {data.map(shrine=>(
          <li key={shrine.id}>
            <div className="card">
              <div className="__img" style={{backgroundImage: "url('" + shrine.cover + "')"}}>
              </div>
              <h3>
                {shrine.name}
                <small>（{shrine.kana}）</small>
              </h3>
                <address>{shrine.address}</address>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Shrines;
