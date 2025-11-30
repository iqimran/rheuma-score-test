import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Activity, User, Ruler, Scale, Calendar, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { activityLevels, activityLevelLabels, type ActivityLevel } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  age: z.string().min(1, "Age is required").transform((val) => parseInt(val, 10)).refine((val) => val >= 1 && val <= 120, "Age must be between 1 and 120"),
  gender: z.enum(["male", "female"], { required_error: "Please select a gender" }),
  height: z.string().min(1, "Height is required").transform((val) => parseFloat(val)).refine((val) => val >= 50 && val <= 300, "Height must be between 50 and 300 cm"),
  weight: z.string().min(1, "Weight is required").transform((val) => parseFloat(val)).refine((val) => val >= 20 && val <= 500, "Weight must be between 20 and 500 kg"),
  activityLevel: z.enum(activityLevels, { required_error: "Please select an activity level" })
});

type FormData = z.input<typeof formSchema>;

interface CalculationResult {
  bmr: number;
  tdee: number;
  category: string;
}

export default function CalculatorPage() {
  const [, setLocation] = useLocation();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      gender: undefined,
      height: "",
      weight: "",
      activityLevel: undefined
    }
  });

  const calculateMutation = useMutation({
    mutationFn: async (data: { age: number; gender: string; height: number; weight: number; activityLevel: string }) => {
      const response = await apiRequest("POST", "/api/calculate", data);
      const result: CalculationResult = await response.json();
      return { ...result, input: data };
    },
    onSuccess: (data) => {
      sessionStorage.setItem("calculationResult", JSON.stringify(data));
      setLocation("/result");
    }
  });

  const onSubmit = (data: FormData) => {
    const parsedData = {
      age: parseInt(data.age, 10),
      gender: data.gender,
      height: parseFloat(data.height),
      weight: parseFloat(data.weight),
      activityLevel: data.activityLevel
    };
    calculateMutation.mutate(parsedData);
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-page-title">
            Calorie Calculator
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
            Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) 
            to understand your daily calorie needs.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Your Information</CardTitle>
            <CardDescription>
              Enter your details below to calculate your daily calorie requirements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        Age <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter your age"
                          data-testid="input-age"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        Gender <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" data-testid="radio-male" />
                            <Label htmlFor="male" className="cursor-pointer">Male</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" data-testid="radio-female" />
                            <Label htmlFor="female" className="cursor-pointer">Female</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Ruler className="h-4 w-4 text-muted-foreground" />
                          Height (cm) <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="e.g., 175"
                            data-testid="input-height"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Scale className="h-4 w-4 text-muted-foreground" />
                          Weight (kg) <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="e.g., 70"
                            data-testid="input-weight"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="activityLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-muted-foreground" />
                        Activity Level <span className="text-destructive">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-activity">
                            <SelectValue placeholder="Select your activity level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {activityLevels.map((level) => (
                            <SelectItem key={level} value={level} data-testid={`option-${level}`}>
                              {activityLevelLabels[level as ActivityLevel]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={calculateMutation.isPending}
                    data-testid="button-calculate"
                    className="w-full md:w-auto"
                  >
                    {calculateMutation.isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Calculating...
                      </>
                    ) : (
                      "Calculate My Calories"
                    )}
                  </Button>
                </div>

                {calculateMutation.isError && (
                  <p className="text-destructive text-sm text-center" data-testid="text-error">
                    An error occurred. Please try again.
                  </p>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
