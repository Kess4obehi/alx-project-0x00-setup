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
        <Button title="Small Button" size="sm" shape="rounded-sm" />
        <Button title="Medium Button" size="md" shape="rounded-md" />
        <Button title="Large Button" size="lg" shape="rounded-full" />
      </div>
    </main>
  )
}

export default Landing
