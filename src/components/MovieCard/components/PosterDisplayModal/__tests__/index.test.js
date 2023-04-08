import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import PosterDisplayModalLazy from '../'

jest.mock("../PosterDisplayModal.view", () => jest.fn(() => <>PosterDisplayModal</>));

describe("PosterDisplayModal.index", () => {
  it("should load component correctly with lazy load", () => {
    render(<PosterDisplayModalLazy/>);
    expect(screen.getByText(/posterdisplaymodal/i)).toBeVisible();
  })
})