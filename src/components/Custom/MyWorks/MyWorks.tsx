import React from "react";
import { demoWorkData } from "../data/demoWorkData";
import { Button, Chip, Card, CardContent, Typography } from "@mui/material";

const MyWork = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoWorkData.map((work) => (
          <Card key={work.id} className="shadow-lg">
            <CardContent>
              <Typography variant="h6" className="font-bold text-gray-700">
                {work.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600 my-2">
                {work.description}
              </Typography>
              <div className="my-3 flex flex-wrap gap-2">
                {work.technologies.map((tech, index) => (
                  <Chip key={index} label={tech} className="bg-blue-100 text-blue-800" />
                ))}
              </div>
              <Button
                variant="contained"
                color="primary"
                href={work.link}
                className="mt-4"
              >
                View Project
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
