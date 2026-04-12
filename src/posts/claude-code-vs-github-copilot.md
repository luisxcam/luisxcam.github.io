---
slug: "claude-code-vs-github-copilot"
title: "CLAUDE CODE VS. GITHUB COPILOT"
date: "2026-04-07"
tags: ["ai", "tooling", "dx"]
excerpt: "A daily GitHub Copilot user joins a Claude Code pilot program. Here's what I actually found."
coverImage: "/blog/claude-code-vs-github-copilot/claude_vs_copilot_banner.png"
---

## Blog Post Research: Which one is better?

> TL;DR. It depends on what you like and what makes you the most comfortable.

It's been 4 weeks since I transitioned from my Manager role back to an Individual Contributor, to be more specific, a Principal Software Developer. Not going to lie, the transition is an exciting challenge, and I missed the smell of burning code in the morning. Nonetheless, I am coming back after a major shift in the industry, to say the least: _"Who is still doing Artisanal Coding?"_.

You read it in the news: [Spotify Developer no longer code](https://techcrunch.com/2026/02/12/spotify-says-its-best-developers-havent-written-a-line-of-code-since-december-thanks-to-ai/), [Claude is writing itself](https://medium.com/codex/claude-code-21-guide-16e084fd5be0), etc. The market has shifted from reading [Stack Overflow](https://stackoverflow.com/questions) to simply prompting [LLMs](https://en.wikipedia.org/wiki/Large_language_model); the standard has become: _"Don't burn man hours, burn tokens instead"_. So that's what I did: I burned tokens instead.

It started with a very simple challenge I set for myself: _"I will not touch code anymore"_, and so I faced this challenge with both hands in front of me, only pushing the gas. Needless to say, what I found is nothing short of amazing. The headlines are right: AI is definitely a force multiplier, but don't get me wrong, it's a force multiplier when the proper mindset is the standard. Meaning, you can have a waffle maker, but if you don't know how long to leave them there, you're gonna end up with soggy waffles or burned waffles. Take your pick.

So far, I've been finding myself learning the tool, utilizing agents, and running parallel tasks (both JIRA tickets and agents running in parallel). I've found myself really in love with how I am able to multitask a lot of my work, and how I can creatively find ways to generate files that ensure all of my development stays within the boundaries of the methodologies established by the source code architecture. This, and setting my own personal [GitHub Copilot](https://github.com/features/copilot) to have a Deadpool persona.

> ● Markdown, Captain. 🌮

![Copilot Enterprise Pricing Model](/blog/claude-code-vs-github-copilot/copilot_pricing.png)

After spending a glorious 3 weeks with Copilot, and burning through tokens in just a couple of days (I am sooo happy we got more premium requests enabled), my manager and a staff developer for my org came around and told me that I was included in an experiment within our organization to use [Claude Code](https://claude.ai/). The goal? To determine what the right tool is for the business, and whether there is anything Claude offers that might justify us moving from Copilot over to Claude.

![Claude Enterprise Pricing Model](/blog/claude-code-vs-github-copilot/claude_pricing.png)

Now, I like reading [Substack](https://substack.com/), and the majority of the articles I read in regard to AI development are all about the wonders of Claude Code, how it works, and how it makes everything better. I am just bombarded by the media into thinking Claude Code is the real force multiplier; short to say, I was intrigued to be a part of this pilot program. As a daily user of Copilot, little did I know what I would unveil.

### What did you find?

Well, it all started on a Saturday. I was reading article after article about Claude, and I couldn't help but notice that I was reading about functionality that already exists within Copilot. The article says, _"The tooling in Claude is amazing"_, so I asked myself, which tooling? And this is what I found so far:

- Claude can span multiple agents => Copilot can also run multi-agent workflows, and there is enough tooling overlap that I don't see this as a decisive gap
- Claude has an amazing Marketplace => Agreed, but Copilot also supports plugin marketplaces, including Claude-oriented ones, so this is not as exclusive as people make it sound
- Claude allows you to change the reasoning level for the models => Copilot also gives you model choice and control over how you want to work, so I don't see this as a major differentiator either

The more I proceeded to dig, the more I found that they were pretty similar, and I found this to be especially true when I was working with a Jr. Software Developer (on Friday) who wanted to make a change to some caching mechanism logic we had. Let's imagine the following code:

```csharp
public class UniversalCache {
    public async Task Save(ClassA data) {
        // Hardcoded logic for ClassA
        await _cache.SetAsync(data);
    }
}
```

The goal is that we had an implementation for `ClassA` that needed to be changed when we were invoking the caching logic from a different mechanism. In the scenario where we called the caching engine from this other place, we needed to run logic for `ClassB`, which represents another data structure we have. Right off the bat, I already knew how to proceed, but as my challenge was still up (and it will be like this forever... unless I run out of tokens), I proceeded to challenge the developer to have a conversation with their Copilot, so I told them to prompt the following:

> I've got code in UniversalCache that stores data for ClassA, I need to refactor the code so that when I call this functionality from <parallel_function> we change the mechanism so that we work with ClassB instead. Draft a plan for the changes required.

What Copilot proceeded to do was baffling. It quite literally gave me something similar to this:

```csharp
public class UniversalCache {
    public async Task Save(object data) {
        if (data is ClassA) { /* Logic for A */ }
        if (data is ClassB) { /* Logic for B */ }
    }
}
```

I was at a loss for words, so I simply proceeded to ask:

> Why did you avoid Generics?

What followed is what reminded me that AI, while very smart, at the end of the day needs a human in the loop. I hated it when I read the following message:

> ● That's very insightful

I swear, I wanted to ask Microsoft for a refund on my tokens. What it proceeded to provide looked something like the following:

```csharp
// The Generic Orchestrator (This class remains unchanged regardless of type)
public class UniversalCache<T> where T : class {
    private readonly ICacheRepo<T> _cacheRepo;

    public UniversalCache(ICacheRepo<T> cacheRepo) {
        _cacheRepo = cacheRepo;
    }

    public async Task SaveAsync(T data) {
        // The orchestrator stays clean; the repo handles the specific implementation
        await _cacheRepo.Save(data);
    }
}

// The Repository Abstraction
public interface ICacheRepo<T> {
    Task Save(T data);
}

// Specific Repository for ClassA
public class ClassACacheRepo : ICacheRepo<ClassA>{}

// Specific Repository for ClassB
public class ClassBCacheRepo : ICacheRepo<ClassB>{}
```

I insist. I want my tokens back. I finally had my [Bridge Pattern](https://refactoring.guru/design-patterns/bridge) and the [Strategy Pattern](https://refactoring.guru/design-patterns/strategy), but what did it cost me? How could we avoid this fiasco in the future? What if someone thinks: _"Ahhh, it works, this is good!"_

### Claude to the rescue...?

So, after having the conversation and providing clarification, I was back to my antics. I had a fresh installation of Claude Code, and an open mind into seeing the wonder of Claude Code. Finally, it was my time to demonstrate the everlasting power, the ultimate coding tool, no more mistakes, only greatness...

> It did exactly the same thing...

What did just happen? What the hell just happened here? I thought the whole `Thinks better` thing was an out-of-the-box feature, and you are probably wondering, how did you do this? Well, for both I used exactly the same models (Sonnet 4.6), and exactly the same prompts, to obtain exactly the same results and the same flow. Maybe the difference is that it called me smart?

> ● That's smart!

So here I was, asking myself, `Where did I go wrong?` It's gotta be a user issue, not a tool issue, to which I remembered, what is it that I read all the time in those Substack articles? `SKILLS`. The secret sauce to the majority of these articles is the skills, the agents, the tooling behind the tool invocations, nothing else, nothing more. Realistically, the tool was just another Copilot, it's just that it had a different branding and a different mascot.

### So what happened Saturday?

Well, I cracked the good ol' notebook, and I proceeded to do research. I also got a certification from Anthropic, because why not.

![Claude Code in Action Certificate](/blog/claude-code-vs-github-copilot/claude_code_cert.png)

So, I began comparing each other, and these were the results of my research. Please feel free to ignore my handwriting.

|![My notes](/blog/claude-code-vs-github-copilot/mynotes1.jpg)|
|![My notes cont.](/blog/claude-code-vs-github-copilot/mynotes2.jpg)|

Let me provide a cleaner version, with a bit more insight.

| Claude | Copilot |
| --- | --- |
| The Million Token Context Window | Seems unnecessary, and I worry about its performance |
|(cont.)|It's labeled as Beta, and a bigger window doesn't equal better reasoning|
|(cont.)|Maybe good for a major refactoring of a monolithic solution, which applies to us, but who is doing it? Is it everyone?|
|Better tools and orchestration|Copilot can also run multi-agents, and has the same tooling|
|Ecosystem is ahead of Copilot's (Marketplace)|True. But this doesn't mean Copilot doesn't have one, and this will catch up in time, more tools doesn't equal better tools|
|(cont.)|In addition, by the time we figure out our required tooling, it will be tailored to us|
|Gives more customization|Maybe, but not enough for me to call it a decisive advantage|
|You would not be product locked|I would be Claude locked...|
|I can run on GitHub|True, but Copilot is already native to GitHub, so this doesn't land as a major differentiator for me|
|I can run Claude on GitHub Actions|True, but Copilot also runs agentic workflows in isolated GitHub-hosted environments, so again, this feels more like overlap than separation|
|Cowork packages agentic work into a dedicated Desktop workflow|Copilot already does agentic work across multiple surfaces, so this feels more like a UX/product wrapper difference than a capability gap|
|Claude.md|*-instructions.md|
|(cont.)|And this is interesting, because Copilot instructions seem better at giving you more granular controls, smaller files that load only when needed, and multiple levels where you can scope them|
|Rewind|Yep. Both ends|

### Rewind is my favorite feat so far: Claude's Rewind

I actually thought this pretty amazing. So what's this magical feature? Let's read it from the Claude:

> Press Esc twice (Esc + Esc) or use the `/rewind` command to open the rewind menu. A scrollable list shows each of your prompts from the session. Select the point you want to act on, then choose an action:
>
> - **Restore code and conversation**: revert both code and conversation to that point
> - **Restore conversation**: rewind to that message while keeping current code
> - **Restore code**: revert file changes while keeping the conversation
> - **Summarize from here**: compress the conversation from this point forward into a summary, freeing context window space
> - **Never mind**: return to the message list without making changes
>
> After restoring the conversation or summarizing, the original prompt from the selected message is restored into the input field so you can re-send or edit it.

Just amazing.

### Conclusion

I honestly cannot say Claude is better than Copilot, or that Claude has something that would make it better than Copilot. Maybe it's my naivety and my inexperience talking here, but as I keep working with both, I haven't found a clear indicator that is able to sway me in either direction, maybe just the pricing. 

The more I hear from people reporting: `It does this better, or does that better`, all I want to ask them is `HOW?`. Is it the `Skills` they are using, or maybe the `Hooks`? Then this is not really a product feat, it's a customization, and in the realm of both tools, the customization at the end of the day is the same. 

With that said, I can only keep exploring, and I can only keep on testing until maybe I will write a part II of this article.

Thanks!

Luis
