---
slug: "claude-code-vs-github-copilot"
title: "CLAUDE CODE VS. GITHUB COPILOT"
date: "2026-04-07"
tags: ["ai", "tooling", "dx"]
excerpt: "A daily GitHub Copilot user joins a Claude Code pilot program. Here's what I actually found."
coverImage: "/blog/claude-code-vs-github-copilot/claude_vs_copilot_banner.png"
---

## Blog Post Research: Which one is better?

> TL:DR. It depends on what you like, and what makes you the most comfortable.

It's been 4 weeks since I transitioned from my Manager role back to an Individual Contributor, to be more specific a Principal Software Developer. Not going to lie, the transition is an exciting challenge, and I missed the smell of burning code in the morning, nonetheless I am coming back after a major shift in the industry, to say the least: _"Who is still doing Artisanal Coding?"_.

You read it in the news, [Spotify Developer no longer code](https://techcrunch.com/2026/02/12/spotify-says-its-best-developers-havent-written-a-line-of-code-since-december-thanks-to-ai/), [Claude is writing itself](https://medium.com/codex/claude-code-21-guide-16e084fd5be0), etc. The market has shifted from reading [Stackoverflow](https://stackoverflow.com/questions) to simply prompting a [LLMs](https://en.wikipedia.org/wiki/Large_language_model), the standard has become: _"Don't burn man hours, burn tokens instead"_. So that's why I did, I burned tokens instead.

It started with a very simple challenge I set to myself: _"I will not touch code anymore"_, and so I faced this challenge with both hands in front on me, and only pushing the gas. Least to say, what I found is nothing short of amazing, the headlines are right AI is definitely a force multiplier, but don't get me wrong, it's a force multiplier when the proper mindset is the standard, meaning, you can have a waffle maker, but if you don't know for how long to leave them there you gonna end up with soggy waffles, or burned waffles, take your pick.

So far, I've been finding myself learning the tool, utilizing agents, parallel tasks (both JIRA tickets, and agents running in parallel), I've found myself really in love of how I am able to multitask a lot of my work, and how I can creatively find ways to generate files which ensure that all of my development stays within the boundaries of the methodologies established by the source code architecture. This, and setting my own personal [GitHub Copilot](https://github.com/features/copilot) to have a Deadpool Persona.

> ● Markdown, Captain. 🌮

![Copilot Enterprise Pricing Model](/blog/claude-code-vs-github-copilot/copilot_pricing.png)

After spending glorious 3 weeks with Copilot, and burning through tokens in just a couple days (I am sooo happy we got more premium request enabled) my manager and a staff developer for my org came around and told me that I was included on an experiment within our organization to use [Claude Code](https://claude.ai/). The goal? To determine what is the right tool for the business, and is there anything Claude offers that might justify us moving from Copilot over to Claude. 

![Claude Enterprise Pricing Model](/blog/claude-code-vs-github-copilot/claude_pricing.png)

Now, I like reading [Substack](https://substack.com/), and majority of my articles in regards to AI Development are all about the wonders of Claude Code, how it works, how it makes everything better, I am just bombarded by the media into how much Claude code is the real force multiplier; short to say, I was intrigued to be a part of this pilot program. As a daily user of Copilot little did I know what I would unveil.

### What did you find?

Well, it all started on a Saturday, I was reading article after article of Claude, and I couldn't fail to notice that I believe I was reading all functionality that already exists within Copilot. The article says, _"The tooling in Claude is amazing"_, so I asked myself, which tooling? And this is what I found so far:

- Claude can span multiple agents => So does Copilot
- Claude has an amazing Marketplace => Agreed, but Copilot can use the same marketplace
- Claude allows you to change the reasoning level for the models => Ehhh... Should I repeat myself?

The more I proceeded to dig, the more I found that they were pretty similar, and I found this to be the most true when I was working with a Jr. Software Developer (on Friday) who wanted to make a change into a caching mechanism logic we had. Let's imagine the following code:

```csharp
public class UniversalCache {
    public async Task Save(ClassA data) {
        // Hardcoded logic for ClassA
        await _cache.SetAsync(data);
    }
}
```

The goal is that we had an implementation for `ClassA` that needed to be change when we were invoking the caching logic from a different mechanism, in the scenario that we called the caching engine from this other place, we needed to run logic for `ClassB` which represents another data structure we have. Right off the bat I already knew how to proceed, but as my challenge was still up (and it will be like this forever... unless I run out of tokens) I proceede to challenge the developer to have a conversation with their Copilot, so I told them, prompt the following:

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

I was at a loss of words, so I simply proceeded to ask

> Why did you avoid Generics?

What followed its what reminded me that AI while very smart, at the end of the day needs a human in the loop. I hated it when I read the following message:

> ● That's very insightful

I swear, I wanted to ask Microsoft for a refund on my tokens. What it proceeded to provide looked something similar to the following:

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

I insist. I want my tokens back. I finally had my [Bridge Pattern](https://refactoring.guru/design-patterns/bridge) and the [Strategy Pattern](https://refactoring.guru/design-patterns/strategy), but what did it cost me? How could we avoid this fiasco in the future? What is someone thinks: _"Ahhh, it works, this is good!"_

### Claude to the rescue...?

So, after having the conversation, and providing clarification I was back to my antics, I had a fresh installation of Claude Code, and an open mind into seeing the wonder of Claude Code, finally, it was my time to demonstrate the neverlasting power, the ultime coding tool, no more mistakes, only greatness...

> It did exactly the same thing...

What did just happen? What the hell did just happened here? I thought the whole `Thinks better`, was an out of the box thing, and you are probably wondering, how did you do this? Well, for both I used exactly the same models (Sonnet 4.6), and exactly the same prompts, to obtain exactly the same results and the same flow. Maybe the difference it that it called me smart?

> ● That's smart!

So here I was, asking myself, `Where did I go wrong?`, it's gotta be an user issue, not a tool issue, to which I remembered, what is it that I read all the time on those Substack articles, `SKILLS`. The secret sauce to all of these articles are on its majority, the skills, the agents, the tooling behind the tool invocations, nothing else, nothing more. Realistically, the tool was just another Copilot, is just that it had a different branding and a different mascot. 

### So what happened Saturday

Well, I cracked the good ol' notebook, and I proceed to do research. I also got a certification from Anthropic, because why not.

![Claude Code in Action Certificate](/blog/claude-code-vs-github-copilot/claude_code_cert.png)

So, I began comparing each other, and these were the results of my research. Please free to ignore my hand writing

|![Claude Code in Action Certificate](/blog/claude-code-vs-github-copilot/mynotes1.jpg)|
|![Claude Code in Action Certificate](/blog/claude-code-vs-github-copilot/mynotes2.jpg)|

Let me provide a cleaner version, with a bit more insights

| Claude | Copilot |
| --- | --- |
| The Million Token Context Window | Seems unnecessary, and I worry about its performance |
||It's labelled as Beta, and a bigger windows doesn't equals to better reasoning|
||Maybe good for a major refactoring of a monolithic solution, which applies to us, but who is doing it? is it everyone?|
|Better tools and orchestration|Copilot can also run multi-agents, and has the same tooling|
|Ecosystem is ahead of Copilot's (Marketplace)|True. But this doesn't mean Copilot doesn't have one, and this will catch up in time, more tools doesn't equal better tools|
||In addition, by the time we figure out our required tooling it will be tailored to us|
|Gives more customization|Same...|
|You would not be product locked|I would be Claude locked...|
|I can run on GitHub|Requires config, and Copilot can do so out of the box|
|I can run Claude on GitHub Actions|Same. It also has a remote Agent that can run in an isolated environment|
|Claude Cowork!|Useful `IF` I was trying to do something from my phone, but I have my laptop with me all the time. Maybe for SREs?|
|Claude.md|*-instructions.md|
||And this is interesting as it seems like Copilot instructions is better in having more granular controls, smaller files which load when necessary, and you can have it at multiple levels of your code|
|Rewind|Ok... you got me there|

### Claude's Rewind

I believe this is the only thing that I actually thought it was pretty amazing. So what's this magical feature? As per their docs:

```
Press Esc twice (Esc + Esc) or use the /rewind command to open the rewind menu. A scrollable list shows each of your prompts from the session. Select the point you want to act on, then choose an action:

> Restore code and conversation: revert both code and conversation to that point
> Restore conversation: rewind to that message while keeping current code
> Restore code: revert file changes while keeping the conversation
> Summarize from here: compress the conversation from this point forward into a summary, freeing context window space
> Never mind: return to the message list without making changes

After restoring the conversation or summarizing, the original prompt from the selected message is restored into the input field so you can re-send or edit it.
```

Now, does this justify one tool over the other? I honestly don't think so. But nonetheless, very very cool.

### Conclusion

I honestly cannot say Claude is better than Copilot, or that Claude has something that would make it better than Copilot, maybe is my naviety, and my inexperience talking in here, but as I keep working with both I haven't found a clear indicator that is able to sway me in either direction, maybe just the pricing. The more I hear from people reporting: `It does this better, or does that better` all I want to ask them is `HOW?`. Is it the Skills they are using, or maybe the `Hooks`? Then this is not really a product feat, is a customization, and in the real of both tools, the customaization at the end of the day is the same. With that said, I can only keep exploring, and I can only keep on testing until maybe I will write a part II of this article.

Thanks!

Luis