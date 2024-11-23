import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FEATURES } from '@/lib/constants';
import * as Icons from 'lucide-react';

export function Features() {
  return (
    <section className="container py-24">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Why Choose MindBridge?</h2>
        <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
          We offer a comprehensive platform designed to make mental health support accessible,
          personalized, and effective for everyone.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => {
          const Icon = Icons[feature.icon as keyof typeof Icons];
          return (
            <Card key={feature.title}>
              <CardHeader>
                <Icon className="h-12 w-12 text-blue-600" />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}