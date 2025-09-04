import React from 'react';

type Props = { children: React.ReactNode; name?: string };
type State = { hasError: boolean; message?: string };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, message: undefined };

  static getDerivedStateFromError(error: unknown): State {
    let message: string;

    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === 'string') {
      message = error;
    } else {
      try {
        message = JSON.stringify(error);
      } catch {
        message = 'Unknown error';
      }
    }

    return { hasError: true, message };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    const message =
      error instanceof Error ? error.message : typeof error === 'string' ? error : String(error);

    // Safe logging
    console.error(`[ErrorBoundary:${this.props.name || 'section'}]`, message, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="my-8 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">
          <div className="font-semibold">
            This section failed to load{this.props.name ? ` (${this.props.name})` : ''}.
          </div>
          <div className="text-xs opacity-80 mt-1">{this.state.message}</div>
        </div>
      );
    }

    return this.props.children;
  }
}
