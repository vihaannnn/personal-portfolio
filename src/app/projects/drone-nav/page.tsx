import Image from "next/image";

import { projects } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DroneNavProject() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Project Header */}
      <h1 className="text-4xl font-bold mb-2 tracking-tight">
        Autonomous Drone Navigation
      </h1>
      <p className="text-muted-foreground mb-6">{projects[1].description}</p>
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/projects/drone/main.jpg"
          alt="Drone Navigation"
          fill
          className="object-cover"
        />
      </div>

      {/* Project Description */}
      <section className="space-y-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Implemented reinforcement learning algorithms for autonomous drone
            navigation in complex environments. This project focuses on
            developing robust navigation systems that enable drones to operate
            safely and efficiently in challenging scenarios.
          </p>
        </div>
      </section>
      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {["PyTorch", "ROS", "C++", "Python"].map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Key Features
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Real-time obstacle detection and avoidance</li>
          <li>Reinforcement learning-based path planning</li>
          <li>Integration with ROS (Robot Operating System)</li>
          <li>Simulation environment for training and testing</li>
        </ul>
      </section>

      {/* GitHub Link */}
      <section>
        <Button asChild>
          <a
            href="https://github.com/janedoe/drone-nav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            View on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>
    </div>
  );
}
