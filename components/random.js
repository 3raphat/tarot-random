import Image from 'next/image'
const Random = () => {
  const data = require('../public/data/tarot-images.json').cards
  const num = Math.floor(Math.random() * data.length)
  const res = data[num]
 
  return (
    <div className='bg-rose-400 flex rounded-xl overflow-hidden p-4 shadow-xl'>
      <Image src={`/data/cards/${res.img}`} alt={res.name} width={350} height={600} layout='fixed' className='rounded-lg' />
      <div className='m-8 gap-4 flex flex-col text-[#f5f5f5]'>
        <div className='text-4xl font-bold mb-4'>{res.name}</div>
        <div className='text-xl font-semibold'>
          Meaning
        </div>
        <div>
          Light:{' '}
          {res.meanings.light[Math.floor(Math.random() * res.meanings.light.length)]}
        </div>
        <div>
          Shadow:{' '}
          {res.meanings.shadow[Math.floor(Math.random() * res.meanings.shadow.length)]}
        </div>
      </div>
    </div>
  )
}

export default Random