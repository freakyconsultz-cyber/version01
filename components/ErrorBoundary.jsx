
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center bg-red-50 rounded-xl border border-red-100 m-4">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            We encountered an error while loading this section. Please try refreshing the page.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-inner text-left max-w-lg w-full mb-6 overflow-auto max-h-40 border border-gray-200">
             <code className="text-xs text-red-500 font-mono break-words">
               {this.state.error && this.state.error.toString()}
             </code>
          </div>
          <Button 
            onClick={this.handleRetry}
            className="bg-red-600 hover:bg-red-700 text-white gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh Page
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
