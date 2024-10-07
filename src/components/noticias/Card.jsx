
function Card({ data, descricao, target = false, barWidth = 0 }) {

  let bgFundo = 'branco'
  let corText = 'azulMahindra'
  let bar = 'hidden'

  if(target){
    bgFundo = 'azulMahindra' 
    corText = 'branco'
    bar = 'block'
  }

  return (
    <div className={`bg-${bgFundo} bg-opacity-75 w-1/4 rounded-xl text-${corText} shadow-xl`}>
      <div style={{width: barWidth + '%'}} className={`${bar} h-2 bg-branco rounded-t-xl ease-in-out duration-[10000ms]`}></div>
      <div className="px-6 pb-6">
        <p className="mt-3 text-right">{data}</p>
        <h4 className="text-xl font-medium mt-1">{descricao}</h4>
      </div>
    </div>
  );
}

export default Card;
