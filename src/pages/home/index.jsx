import useHome from "./use-home"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Globe, Settings, Zap } from "lucide-react";

const Home = () => {
  const { loading, methods, notification, onSubmit } = useHome()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Automation Testing
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Leverage artificial intelligence to automate your web application testing. 
            Simply provide a URL and let our AI handle the rest.
          </p>
        </div>

        {/* Main Form Card */}
        <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-gray-800 flex items-center justify-center gap-2">
              <Zap className="w-6 h-6 text-yellow-500" />
              Create Test Automation
            </CardTitle>
            <CardDescription className="text-gray-600">
              Configure your automated testing parameters below
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <Form {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
                {notification}
                
                {/* URL Input */}
                <FormField
                  control={methods.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Target URL
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="https://example.com" 
                          {...field}
                          className="h-12 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Test Type Radio Buttons */}
                <FormField
                  control={methods.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold flex items-center gap-2">
                        <Settings className="w-4 h-4" />
                        Test Type
                      </FormLabel>
                      <FormControl>
                        <div className="flex gap-4">
                          <label className="flex items-center space-x-3 cursor-pointer p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors">
                            <input
                              type="radio"
                              value="manual"
                              checked={field.value === "manual"}
                              onChange={field.onChange}
                              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <div>
                              <div className="font-medium text-gray-900">Manual Testing</div>
                              <div className="text-sm text-gray-500">Human-guided test execution</div>
                            </div>
                            <Badge variant="secondary" className="ml-auto">
                              Precise
                            </Badge>
                          </label>
                          
                          <label className="flex items-center space-x-3 cursor-pointer p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors">
                            <input
                              type="radio"
                              value="auto"
                              checked={field.value === "auto"}
                              onChange={field.onChange}
                              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <div>
                              <div className="font-medium text-gray-900">Automated Testing</div>
                              <div className="text-sm text-gray-500">AI-powered automation</div>
                            </div>
                            <Badge variant="default" className="ml-auto bg-gradient-to-r from-blue-500 to-purple-500">
                              Fast
                            </Badge>
                          </label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Description Textarea */}
                <FormField
                  control={methods.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">
                        Test Description
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe what you want to test on this website. Be specific about the functionality, user flows, or scenarios you'd like to automate..."
                          {...field}
                          className="min-h-32 resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </FormControl>
                      <div className="flex justify-between items-center">
                        <FormMessage />
                        <span className="text-sm text-gray-500">
                          {field.value?.length || 0}/500 characters
                        </span>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Bot className="w-5 h-5" />
                        Start AI Testing
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bot className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">AI-Powered</h3>
            <p className="text-gray-600 text-sm">Advanced machine learning algorithms for intelligent test generation</p>
          </div>
          
          <div className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Lightning Fast</h3>
            <p className="text-gray-600 text-sm">Rapid test execution and comprehensive coverage in minutes</p>
          </div>
          
          <div className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Customizable</h3>
            <p className="text-gray-600 text-sm">Tailored testing scenarios based on your specific requirements</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home