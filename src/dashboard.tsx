import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "/components/ui/card"
import { Button } from "/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "/components/ui/table"
import { Calendar, Clock, Users, Play, Home, Search, Menu, User, Settings, Mail, Bell, Calendar as CalendarIcon, Clock as ClockIcon, Heart, Star, Upload, Download, Trash, Edit, Plus, Minus, Check, X, ArrowRight } from "lucide-react"

interface Goal {
  outcome: string
  metric: string
  target: string
  motivation: string
  deadline: string
}

interface Baseline {
  weight: string
  bodyMeasurements: string
  progressPhotos: File[]
  performanceMetrics: string
  healthMarkers: string
}

interface Milestone {
  description: string
  targetMetric: string
  targetDate: string
}

interface Tracking {
  measurementFrequency: string
  photoFrequency: string
  performanceMetricFrequency: string
  dataDocumentationMethod: string
}

export default function Dashboard() {
  const [goals, setGoals] = useState<Goal[]>([])
  const [baselines, setBaselines] = useState<Baseline[]>([])
  const [milestones, setMilestones] = useState<Milestone[][]>([])
  const [trackings, setTrackings] = useState<Tracking[]>([])

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchedGoals: Goal[] = [
      {
        outcome: 'Lose 10 kg',
        metric: 'Weight',
        target: '85 kg',
        motivation: 'Improve overall health',
        deadline: '2023-12-31'
      }
    ]

    const fetchedBaselines: Baseline[] = [
      {
        weight: '95 kg',
        bodyMeasurements: '180 cm, 90 cm, 80 cm',
        progressPhotos: [],
        performanceMetrics: 'Running 3 times a week',
        healthMarkers: 'Blood pressure, cholesterol'
      }
    ]

    const fetchedMilestones: Milestone[][] = [
      [
        {
          description: 'Lose 2 kg',
          targetMetric: '93 kg',
          targetDate: '2023-03-31'
        },
        {
          description: 'Lose 5 kg',
          targetMetric: '90 kg',
          targetDate: '2023-06-30'
        }
      ]
    ]

    const fetchedTrackings: Tracking[] = [
      {
        measurementFrequency: 'Weekly',
        photoFrequency: 'Monthly',
        performanceMetricFrequency: 'Bi-weekly',
        dataDocumentationMethod: 'Google Sheets'
      }
    ]

    setGoals(fetchedGoals)
    setBaselines(fetchedBaselines)
    setMilestones(fetchedMilestones)
    setTrackings(fetchedTrackings)
  }, [])

  return (
    <div className="p-10">
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/nutlope.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-sm text-muted-foreground">Health & Fitness Coach</p>
              </div>
            </div>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" /> Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {goals.map((goal, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Goal {index + 1}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <div className="font-semibold">Specific Outcome:</div>
                <div>{goal.outcome}</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Quantifiable Metric:</div>
                <div>{goal.metric}</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Realistic Target:</div>
                <div>{goal.target}</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Motivation:</div>
                <div>{goal.motivation}</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Deadline:</div>
                <div>{goal.deadline}</div>
              </div>
            </CardContent>
          </Card>
        ))}

        {baselines.map((baseline, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Baseline Measurements {index + 1}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <div className="font-semibold">Current Weight (kg):</div>
                <div>{baseline.weight}</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Body Measurements (cm):</div>
                <div>{baseline.bodyMeasurements}</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Progress Photos:</div>
                <div className="flex flex-wrap gap-2">
                  {baseline.progressPhotos.map((photo, photoIndex) => (
                    <img key={photoIndex} src={URL.createObjectURL(photo)} alt={`Progress Photo ${photoIndex + 1}`} className="w-16 h-16 rounded-lg" />
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Performance Metrics:</div>
                <div>{baseline.performanceMetrics}</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Optional Health Markers:</div>
                <div>{baseline.healthMarkers}</div>
              </div>
            </CardContent>
          </Card>
        ))}

        {milestones.map((milestoneList, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Milestone Timeline {index + 1}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead>Target Metric</TableHead>
                    <TableHead>Target Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {milestoneList.map((milestone, milestoneIndex) => (
                    <TableRow key={milestoneIndex}>
                      <TableCell>{milestone.description}</TableCell>
                      <TableCell>{milestone.targetMetric}</TableCell>
                      <TableCell>{milestone.targetDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}

        {trackings.map((tracking, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Tracking System Setup {index + 1}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <div className="font-semibold">Measurement Frequency:</div>
                <div>{tracking.measurementFrequency}</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Photo Frequency:</div>
                <div>{tracking.photoFrequency}</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Performance Metric Frequency:</div>
                <div>{tracking.performanceMetricFrequency}</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Data Documentation Method:</div>
                <div>{tracking.dataDocumentationMethod}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
