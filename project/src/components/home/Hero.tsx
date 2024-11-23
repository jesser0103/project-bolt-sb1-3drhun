import { Button } from '@/components/ui/button';
import { UNSPLASH_IMAGES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${UNSPLASH_IMAGES.HERO})` }}
      >
        <div className="absolute inset-0 bg-blue-950/70" />
      </div>

      <div className="container relative">
        <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
          <h1 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Your Journey to Better Mental Health Starts Here
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-blue-100">
            Connect with licensed therapists, join support groups, and access the help you need from
            anywhere. Your well-being is our priority.
          </p>
          <div className="flex space-x-4">
            <Button size="lg" asChild>
              <Link to="/find-therapist">
                Find Your Therapist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10" asChild>
              <Link to="/volunteer">Join as Volunteer</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}