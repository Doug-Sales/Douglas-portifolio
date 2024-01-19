type ProsCard = {
  text: string;
}
export default function KnowledgesCard({ text }: ProsCard) {
  return (
      <div className=" py-2 px-3 shadow-sm rounded-md bg-[#3888f3]/50 text-gray-200 antialiased">
        {text}
      </div>
  )
}