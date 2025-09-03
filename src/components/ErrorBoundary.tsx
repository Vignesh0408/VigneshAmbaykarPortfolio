import React from 'react';

type Props = { children: React.ReactNode; name?: string };
type State = { hasError: boolean; message?: string };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, message: error?.message || 'Unknown error' };
  }

  componentDidCatch(error: any, info: any) {
    // You can log to analytics here if you want
    console.error(`[ErrorBoundary:${this.props.name || 'section'}]`, error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="my-8 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">
          <div className="font-semibold">This section failed to load.</div>
          <div className="text-xs opacity-80">{this.state.message}</div>
        </div>
      );
    }
    return this.props.children;
  }
}
