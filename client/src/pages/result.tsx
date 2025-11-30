import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { BarChart3, Flame, Scale, ArrowLeft, Save, Check, Loader2, Activity, User, Ruler, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { activityLevelLabels, type ActivityLevel } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

interface CalculationData {
  bmr: number;
  tdee: number;
  category: string;
  input: {
    age: number;
    gender: string;
    height: number;
    weight: number;
    activityLevel: string;
  };
}

function getCategoryColor(category: string | undefined | null): string {
  if (!category) return "bg-muted text-muted-foreground";
  switch (category.toLowerCase()) {
    case "underweight":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "normal":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "overweight":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "obese":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    default:
      return "bg-muted text-muted-foreground";
  }
}

export default function ResultPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [data, setData] = useState<CalculationData | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("calculationResult");
    if (stored) {
      try {
        const parsedData = JSON.parse(stored);
        if (parsedData && parsedData.bmr && parsedData.tdee && parsedData.category && parsedData.input) {
          setData(parsedData);
        } else {
          setLocation("/");
        }
      } catch {
        setLocation("/");
      }
    } else {
      setLocation("/");
    }
  }, [setLocation]);

  const saveMutation = useMutation({
    mutationFn: async () => {
      if (!data) return;
      const reportData = {
        age: data.input.age,
        gender: data.input.gender,
        height: data.input.height,
        weight: data.input.weight,
        activityLevel: data.input.activityLevel,
        bmr: data.bmr,
        tdee: data.tdee,
        category: data.category
      };
      return apiRequest("POST", "/api/reports", reportData);
    },
    onSuccess: () => {
      setIsSaved(true);
      toast({
        title: "Report Saved",
        description: "Your calorie calculation has been saved successfully."
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save the report. Please try again.",
        variant: "destructive"
      });
    }
  });

  if (!data) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-results-title">
            Your Results
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Based on the information you provided, here are your daily calorie requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="text-center">
            <CardHeader className="pb-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <CardDescription className="text-sm font-medium">
                Basal Metabolic Rate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-bmr">
                {Math.round(data.bmr).toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground mt-1">calories/day</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30 mb-2">
                <Flame className="h-6 w-6 text-orange-500" />
              </div>
              <CardDescription className="text-sm font-medium">
                Total Daily Energy Expenditure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-tdee">
                {Math.round(data.tdee).toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground mt-1">calories/day</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted mb-2">
                <Scale className="h-6 w-6 text-muted-foreground" />
              </div>
              <CardDescription className="text-sm font-medium">
                BMI Category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge 
                variant="secondary" 
                className={`text-base px-4 py-1 ${getCategoryColor(data.category)}`}
                data-testid="badge-category"
              >
                {data.category}
              </Badge>
              <p className="text-sm text-muted-foreground mt-2">based on your BMI</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Input Summary</CardTitle>
            <CardDescription>The values you entered for this calculation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Age</p>
                  <p className="font-medium" data-testid="text-input-age">{data.input.age} years</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Gender</p>
                  <p className="font-medium capitalize" data-testid="text-input-gender">{data.input.gender}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Height</p>
                  <p className="font-medium" data-testid="text-input-height">{data.input.height} cm</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Weight</p>
                  <p className="font-medium" data-testid="text-input-weight">{data.input.weight} kg</p>
                </div>
              </div>
              <div className="flex items-center gap-2 col-span-2 md:col-span-1">
                <Activity className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Activity</p>
                  <p className="font-medium text-sm" data-testid="text-input-activity">
                    {activityLevelLabels[data.input.activityLevel as ActivityLevel]?.split("(")[0].trim() || data.input.activityLevel}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-muted/30">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">What is BMR?</h3>
                <p className="text-sm text-muted-foreground">
                  Your Basal Metabolic Rate (BMR) is the number of calories your body needs to maintain 
                  basic functions like breathing, circulation, and cell production while at rest.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-1">What is TDEE?</h3>
                <p className="text-sm text-muted-foreground">
                  Your Total Daily Energy Expenditure (TDEE) is your BMR multiplied by your activity level. 
                  This is the total number of calories you burn per day and is useful for weight management goals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="outline" size="lg" data-testid="button-calculate-again" className="w-full sm:w-auto">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Calculate Again
            </Button>
          </Link>
          <Button
            size="lg"
            onClick={() => saveMutation.mutate()}
            disabled={saveMutation.isPending || isSaved}
            data-testid="button-save-report"
            className="w-full sm:w-auto"
          >
            {isSaved ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Saved
              </>
            ) : saveMutation.isPending ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Report
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
