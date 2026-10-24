import { AfterViewInit, Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fades/slides the element in the first time it scrolls into view. */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'reveal' }
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  /** Delay in ms, useful for staggering items in a list. */
  readonly appReveal = input<number | string>(0);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    const delay = Number(this.appReveal()) || 0;
    if (delay) node.style.animationDelay = `${delay}ms`;

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

/** Animates a number from 0 to `appCountUp` once visible. */
@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  readonly appCountUp = input.required<number>();
  readonly suffix = input('');

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;
  private frame = 0;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    const target = this.appCountUp();
    const render = (n: number) => (node.textContent = `${n}${this.suffix()}`);

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      render(target);
      return;
    }
    render(0);
    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      this.observer?.disconnect();
      const start = performance.now();
      const duration = 1600;
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        render(Math.round(target * (1 - Math.pow(1 - t, 4))));
        if (t < 1) this.frame = requestAnimationFrame(tick);
      };
      this.frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    cancelAnimationFrame(this.frame);
  }
}

/** Feeds the cursor position to the `.spotlight` CSS glow. */
@Directive({
  selector: '[appSpotlight]',
  standalone: true,
  host: {
    class: 'spotlight',
    '(pointermove)': 'onMove($event)'
  }
})
export class SpotlightDirective {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  onMove(event: PointerEvent): void {
    const node = this.el.nativeElement;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    node.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }
}
