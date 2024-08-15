'use client'
import MeetingTypeList from '@/components/MeetingTypeList';
import { useGetCalls } from '@/hooks/useGetCalls';

const Home = () => {
  const now = new Date();
  const { nearestCall } =
  useGetCalls();

  
  const isTomorrow = (date: Date) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Move to the next day
  
    // Clear the time portion for both dates for comparison
    tomorrow.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
  
    return tomorrow.getTime() === date.getTime();
  };

  const startsAt = new Date(nearestCall?.state?.startsAt ?? '');
  
  // Check if the call is scheduled for tomorrow
  const displayDate = isTomorrow(startsAt) ? "Tomorrow" : startsAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            {`Nearest Upcoming Call: ${displayDate} at ${startsAt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`} 
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;