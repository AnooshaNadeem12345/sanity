import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Item {
  productName: string,
  price: number,
}

export default async function Home() {
  const data = await client.fetch(`*[_type == 'product']`);
  console.log(data);
  
  return (
    <div>
      <section>
        {data.map((item: Item, i: number) => {
          return (
            <div className="flex gap-3" key={i}>
              <h1>{item.productName}</h1>
              <p>$ {item.price}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
 