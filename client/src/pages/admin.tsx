import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { LayoutDashboard, Loader2, FileX, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { activityLevelLabels, type ActivityLevel, type Report } from "@shared/schema";
import { queryClient } from "@/lib/queryClient";

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

export default function AdminPage() {
  const { data: reports, isLoading, isError, refetch } = useQuery<Report[]>({
    queryKey: ["/api/reports"]
  });

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ["/api/reports"] });
    refetch();
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
              <LayoutDashboard className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold" data-testid="text-admin-title">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground text-sm">
                View all saved calorie calculation reports
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {reports && reports.length > 0 && (
              <Badge variant="secondary" className="text-sm px-3 py-1" data-testid="badge-total-reports">
                {reports.length} {reports.length === 1 ? "Report" : "Reports"}
              </Badge>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isLoading}
              data-testid="button-refresh"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              A list of all calorie calculations that have been saved.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-12" data-testid="loading-reports">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Loading reports...</p>
              </div>
            ) : isError ? (
              <div className="flex flex-col items-center justify-center py-12" data-testid="error-reports">
                <FileX className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">Failed to load reports</p>
                <Button variant="outline" onClick={handleRefresh}>
                  Try Again
                </Button>
              </div>
            ) : !reports || reports.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12" data-testid="empty-reports">
                <FileX className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-lg mb-2">No reports yet</p>
                <p className="text-muted-foreground text-sm">
                  Reports will appear here when users save their calculations.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[140px]">Date</TableHead>
                      <TableHead className="text-center">Age</TableHead>
                      <TableHead className="text-center">Gender</TableHead>
                      <TableHead className="text-center">Height</TableHead>
                      <TableHead className="text-center">Weight</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead className="text-right">BMR</TableHead>
                      <TableHead className="text-right">TDEE</TableHead>
                      <TableHead className="text-center">Category</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reports.map((report, index) => (
                      <TableRow 
                        key={report.id} 
                        data-testid={`row-report-${index}`}
                        className="hover-elevate"
                      >
                        <TableCell className="font-medium text-sm">
                          {report.createdAt 
                            ? format(new Date(report.createdAt), "MMM d, yyyy HH:mm")
                            : "N/A"
                          }
                        </TableCell>
                        <TableCell className="text-center">{report.age}</TableCell>
                        <TableCell className="text-center capitalize">{report.gender}</TableCell>
                        <TableCell className="text-center">{report.height} cm</TableCell>
                        <TableCell className="text-center">{report.weight} kg</TableCell>
                        <TableCell className="max-w-[150px] truncate text-sm">
                          {activityLevelLabels[report.activityLevel as ActivityLevel]?.split("(")[0].trim() || report.activityLevel}
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {Math.round(report.bmr).toLocaleString()}
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {Math.round(report.tdee).toLocaleString()}
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge 
                            variant="secondary"
                            className={getCategoryColor(report.category)}
                          >
                            {report.category}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
