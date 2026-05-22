import feedback from "../data/feedback.json";

import Container from "../components/Container";
import StatsCard from "../components/StatsCard";
import FeedbackTicket from "../components/FeedbackTicket";
import Card from "../components/Card";
import Button from "../components/Button";

export default function FeedbackPage() {

  return (
    <Container className="min-h-screen bg-[#f5f6fa] p-6">

      <div className="flex justify-between items-start mb-8">

        <div>
          <h1 className="text-5xl font-bold">
            Feedback
          </h1>

          <p className="text-gray-400 text-xl mt-2">
            Reviews and ratings from your customers
          </p>
        </div>

        <Button className="bg-[#5B7CFF] text-white px-6 py-3 rounded-2xl">
          View Reports
        </Button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

        <StatsCard
          title="Average Rating"
          value="4.6"
        />

        <StatsCard
          title="Total Reviews"
          value={feedback.length}
        />

        <StatsCard
          title="Positive Feedback"
          value="91%"
        />

        <StatsCard
          title="Growth"
          value="+15%"
        />

      </div>

      <Card className="p-5">

        <h2 className="font-semibold text-lg mb-5">
          Recent Feedback
        </h2>

        <div className="space-y-5">

          {feedback.map((f) => (
            <FeedbackTicket
              key={f.id}
              name={f.name}
              category={f.category}
              date={f.date}
              comment={f.comment}
              rating={f.rating}
            />
          ))}

        </div>

      </Card>

    </Container>
  );
}