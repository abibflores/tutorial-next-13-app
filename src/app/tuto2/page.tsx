import { Card } from '@/components/card/Card';

export default async function Home() {
    const data = await fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => { console.log(data); return data });
  return (
    <main>
        <div>
            {
            data.results.map((item, index: number) => (
                <Card key={index} >
                    {item.name}
                </Card>
            ))
            }
        </div>
    </main>
  )
}
