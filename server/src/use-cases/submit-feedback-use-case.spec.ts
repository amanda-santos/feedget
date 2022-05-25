import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

const mockedFeedback = {
  type: "Bug",
  comment: "This is a bug",
  screenshot: "data:image/png;base64-test",
};

const mockedEmail = {
  subject: "New feedback",
  body: [
    `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
    `<p>Feedback Type: ${mockedFeedback.type}</p>`,
    `<p>Comment: ${mockedFeedback.comment}</p>`,
    `</div>`,
  ].join("\n"),
};

describe("Submit feedback", () => {
  it("should be able to submit feedback", async () => {
    await expect(
      submitFeedbackUseCase.execute(mockedFeedback)
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenNthCalledWith(1, mockedFeedback);
    expect(sendMailSpy).toHaveBeenNthCalledWith(1, mockedEmail);
  });

  it("should be able to submit feedback without image", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        ...mockedFeedback,
        screenshot: "",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenNthCalledWith(1, {
      ...mockedFeedback,
      screenshot: "",
    });
    expect(sendMailSpy).toHaveBeenNthCalledWith(1, mockedEmail);
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        ...mockedFeedback,
        type: "",
      })
    ).rejects.toThrow();

    expect(createFeedbackSpy).not.toHaveBeenCalled();
    expect(sendMailSpy).not.toHaveBeenCalled();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        ...mockedFeedback,
        comment: "",
      })
    ).rejects.toThrow();

    expect(createFeedbackSpy).not.toHaveBeenCalled();
    expect(sendMailSpy).not.toHaveBeenCalled();
  });

  it("should not be able to submit feedback with invalid image", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        ...mockedFeedback,
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();

    expect(createFeedbackSpy).not.toHaveBeenCalled();
    expect(sendMailSpy).not.toHaveBeenCalled();
  });
});
