import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import PosterDisplayModalLazy from '../'

jest.mock("../PosterDisplayModal.view", () => jest.fn(() => <>PosterDisplayModal</>));

describe("PosterDisplayModal.index", () => {
  it("should load component correctly with lazy load", async () => {
    await preloadAll();
    render(<PosterDisplayModalLazy/>);
    expect(screen.getByText(/posterdisplaymodal/i)).toBeVisible();
  })
})