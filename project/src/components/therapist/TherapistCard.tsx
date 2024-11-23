import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar, MessageSquare, Star, Video } from 'lucide-react';

interface TherapistCardProps {
  therapist: {
    name: string;
    image: string;
    specialties: string[];
    rating: number;
    reviews: number;
    nextAvailable: string;
  };
}

export function TherapistCard({ therapist }: TherapistCardProps) {
  return (
    <Card>
      <CardHeader className="flex-row items-center space-x-4 space-y-0">
        <Avatar className="h-16 w-16">
          <AvatarImage src={therapist.image} alt={therapist.name} />
          <AvatarFallback>{therapist.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-semibold">{therapist.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">
              {therapist.rating} ({therapist.reviews} reviews)
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap gap-2">
          {therapist.specialties.map((specialty) => (
            <Badge key={specialty} variant="secondary">
              {specialty}
            </Badge>
          ))}
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Next available: {therapist.nextAvailable}</span>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-4">
        <Button className="w-full">
          <Video className="mr-2 h-4 w-4" /> Book Session
        </Button>
        <Button variant="outline" className="w-full">
          <MessageSquare className="mr-2 h-4 w-4" /> Message
        </Button>
      </CardFooter>
    </Card>
  );
}