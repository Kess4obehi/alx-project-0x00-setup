import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-semibold mb-6">Landing Page</h1>
      <Card />
      <Card />
      <Card />

      <div className="flex gap-4 mt-6">
        <Button
          title="Small Button"
          styles="px-3 py-1 text-sm rounded-sm"
        />

        <Button
          title="Medium Button"
          styles="px-5 py-2 text-base rounded-md"
        />

        <Button
          title="Large Button"
          styles="px-7 py-3 text-lg rounded-full"
        />

        <Button
          title="Extra Button"
          styles="px-6 py-2 text-base rounded-lg"
        />
      </div>

    </main>
  )
}

export default Landing
