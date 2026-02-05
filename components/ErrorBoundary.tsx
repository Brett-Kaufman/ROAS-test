
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center font-inter">
          <div className="w-12 h-px bg-red-600 mb-6"></div>
          <h1 className="text-xl font-black text-white uppercase tracking-widest mb-4">Runtime Disruption</h1>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed mb-8">
            The application encountered a critical instruction error. Please refresh the page or update your browser.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-white text-black font-black text-xs uppercase tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all"
          >
            Reconnect
          </button>
        </div>
      );
    }

    // Fix: Access children via this.props
    return this.props.children;
  }
}

export default ErrorBoundary;
