import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { PLACEHOLDER_POSTER_URL } from "@/common/constants";
import PosterDisplayModalView from "../PosterDisplayModal.view";

const mockClose = jest.fn();

jest.mock("next/image", () => jest.fn(({ src }) => <>{src}</>));
const divWithChildrenMock = (children, identifier) => (
  <div data-testId={identifier}>{children}</div>
);
const divWithoutChildrenMock = (identifier) => <div data-testId={identifier} />;

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  PortalManager: jest.fn(({ children }) =>
    divWithChildrenMock(children, "portal")
  ),
  Modal: jest.fn(({ children }) => divWithChildrenMock(children, "modal")),
  ModalOverlay: jest.fn(({ children }) =>
    divWithChildrenMock(children, "overlay")
  ),
  ModalContent: jest.fn(({ children }) =>
    divWithChildrenMock(children, "content")
  ),
  ModalHeader: jest.fn(({ children }) =>
    divWithChildrenMock(children, "header")
  ),
  ModalFooter: jest.fn(({ children }) =>
    divWithChildrenMock(children, "footer")
  ),
  ModalBody: jest.fn(({ children }) => divWithChildrenMock(children, "body")),
  ModalCloseButton: jest.fn(() => divWithoutChildrenMock("close")),
}));
describe("PosterDisplayModal.view", () => {
  it("should display image correctly", () => {
    render(<PosterDisplayModalView img="test.jpg" onClose={mockClose} />);

    expect(screen.getByText(/test.jpg/i)).toBeVisible();
  });

  it("should display placeholder if no image are shown", () => {
    render(<PosterDisplayModalView onClose={mockClose} />);

    expect(screen.getByText(PLACEHOLDER_POSTER_URL)).toBeVisible();
  });
});
