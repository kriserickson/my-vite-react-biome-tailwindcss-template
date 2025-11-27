import { act, fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

describe('App Component Clock', () => {

  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    // Clear mocks and restore timers to prevent leaks between tests
    vi.useRealTimers();
  });

  it('should update time every second and pause/resume on button click', async() => {
    render(<App />);

    // 1. Find the time display.
    // We assume the time format contains colons (e.g., 12:00:00)
    // getByText throws an error if not found, so we don't need to check for null existence immediately
    const timeDisplay: HTMLElement = screen.getByText(/:/i);

    expect(timeDisplay).toBeInTheDocument();

    // Store initial time. textContent is `string | null`, so we force it to string for comparison logic
    const initialTime: string | null = timeDisplay.textContent;

    // 2. Advance time by 1 second
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    const secondTime: string | null = timeDisplay.textContent;

    // Verify time has changed
    expect(secondTime).not.toBe(initialTime);

    // 3. Find and Click the STOP button
    // Explicitly typing as HTMLButtonElement gives us access to button-specific props if needed
    const toggleButton: HTMLButtonElement = screen.getByRole('button', {
      name: /stop/i,
    });

    // User click on the toggle button
    await user.click(toggleButton);

    // 4. Advance time by 2 seconds to ensure it is truly stopped
    act(() => {
      vi.advanceTimersByTime(2000);
    });

    const thirdTime: string | null = timeDisplay.textContent;

    // Verify time did NOT change
    expect(thirdTime).toBe(secondTime);

    // Optional: Check if button text flipped to 'Start'
    expect(toggleButton).toHaveTextContent(/start/i);

    // 5. Click START to resume (do it with the low-level fireEvent to simulate different interaction)
    fireEvent.click(toggleButton);

    // 6. Advance time by 1 second
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    const fourthTime: string | null = timeDisplay.textContent;

    // Verify time is moving again
    expect(fourthTime).not.toBe(thirdTime);
  });
});
