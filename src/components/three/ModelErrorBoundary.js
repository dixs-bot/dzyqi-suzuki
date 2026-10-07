"use client";

import { Component } from "react";
import Link from "next/link";

export class ModelErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // Swallow 3D load errors — never crash the page.
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full min-h-[360px] flex-col items-center justify-center gap-4 bg-navy text-center">
          <p className="text-[11px] uppercase tracking-luxury text-metallic">Unavailable</p>
          <p className="max-w-sm text-sm text-ivory/70">
            The 3D experience could not load. View the gallery instead.
          </p>
          <Link
            href={this.props.galleryHref || "/vehicles"}
            className="border border-accent px-5 py-2 text-[11px] uppercase tracking-wide2 hover:bg-accent"
          >
            View Gallery
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}
