# QA Agent Guide

## Purpose
Use the `tester` role to validate behavior after implementation, not to rediscover the feature requirements.

## Tester Responsibilities
- verify the user-visible flow
- distinguish bugs from UX suggestions
- report exact reproduction steps
- call out missing validation when tests could not be run

## Tester Checklist
- can a new user start without explanation
- do primary buttons behave correctly
- does state progression match the intended rules
- is the result screen accurate
- does the layout remain usable on a phone-sized screen

## Reporting Format
- issue
- severity
- reproduction steps
- expected result
- actual result

## When Not to Delegate
- do not spawn a tester if the implementation is still changing rapidly
- do not use a tester for tasks that are blocked on missing code or missing requirements
