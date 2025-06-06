# Agentic RAG System

A Retrieval-Augmented Generation (RAG) system built with TypeScript and Langbase that provides AI-powered responses based on a knowledge base.

## Overview

This project implements an AI support agent that answers user queries by:

1. Retrieving relevant information chunks from a knowledge base
2. Using those chunks as context for an AI agent to generate accurate responses
3. Properly citing sources in the responses

## Features

- Document retrieval from a knowledge base
- AI-powered question answering with source citations
- TypeScript implementation for type safety
- Easy setup with environment variables

## Prerequisites

- Node.js (v14 or higher)
- TypeScript
- A Langbase API key

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd agentic-rag
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   ```
   cp .env.example .env
   ```
   Then edit the `.env` file and add your Langbase API key.

## Project Structure

- `index.ts` - Main entry point that demonstrates how to use the agents
- `agents.ts` - Contains the implementation of memory and AI support agents
- `create-pipe.ts` - Script to create the AI support agent pipe in Langbase
- `upload-docs.ts` - Script to upload documents to the knowledge base
- `create-memory.ts` - Script to create memory in Langbase

## Usage

### Creating the AI Support Agent Pipe

```
npx tsx create-pipe.ts
```

### Uploading Documents to Knowledge Base

```
npx tsx upload-docs.ts
```

### Running the RAG System

```
npx tsx index.ts
```

This will:

1. Query the memory agent with a predefined question
2. Retrieve relevant chunks from the knowledge base
3. Pass those chunks to the AI support agent
4. Generate a response with proper citations

## Example

The default query in `index.ts` asks about the role of the auditor general. The system retrieves relevant information from the knowledge base and generates a comprehensive response with proper citations.

## Customization

You can modify the query in `index.ts` to ask different questions:

```typescript
const query = "Your question here";
```
