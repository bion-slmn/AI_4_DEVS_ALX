import PollList from "@/features/polls/PollList";

export default function PollsPage() {
    return (
        <main className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Polls</h1>
            <PollList />
        </main>
    );
}
