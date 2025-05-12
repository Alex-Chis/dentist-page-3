'use server';
/**
 * @fileOverview A dental FAQ AI agent.
 *
 * - dentalFaq - A function that handles the dental FAQ process.
 * - DentalFaqInput - The input type for the dentalFaq function.
 * - DentalFaqOutput - The return type for the dentalFaq function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DentalFaqInputSchema = z.object({
  question: z.string().describe('The question about dental hygiene.'),
});
export type DentalFaqInput = z.infer<typeof DentalFaqInputSchema>;

const DentalFaqOutputSchema = z.object({
  answer: z.string().describe('The answer to the dental hygiene question.'),
});
export type DentalFaqOutput = z.infer<typeof DentalFaqOutputSchema>;

export async function dentalFaq(input: DentalFaqInput): Promise<DentalFaqOutput> {
  return dentalFaqFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dentalFaqPrompt',
  input: {schema: DentalFaqInputSchema},
  output: {schema: DentalFaqOutputSchema},
  prompt: `You are a helpful AI assistant providing information about dental hygiene.

  Answer the following question:
  {{question}}`,
});

const dentalFaqFlow = ai.defineFlow(
  {
    name: 'dentalFaqFlow',
    inputSchema: DentalFaqInputSchema,
    outputSchema: DentalFaqOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
